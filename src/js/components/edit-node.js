import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from './show-messages';
import { addLoader, removeLoader } from './loading';
import { replaceNode } from '../api/api-service';
import { updateMarkup } from './update-markup';
import { refs } from '../utils/refs';
import { closeModal, modalOverlayClose, onHandleEscapeKey } from './modal-form';

// Modal Form
export const onEditModalOverlayClick = async event => {
  event.preventDefault();

  const inputValue = event.target.elements.nodeInput.value.trim();
  const textareaValue = event.target.elements.nodeTextarea.value.trim();
  const nodeId = event.target.dataset.id

  if (!inputValue || !textareaValue) {
    showWarningMessage('Fill all fields');
    return;
  }

  const userNode = {
    title: inputValue,
    description: textareaValue,
  };

  try {
    addLoader();
    await replaceNode(userNode, nodeId);
    await updateMarkup();
    showSuccessMessage('Note content changed!');
  } catch (error) {
    showErrorMessage('Error with changing note content!');
  } finally {
    closeModal();
    removeLoader();
    refs.modalForm.removeEventListener('submit', onEditModalOverlayClick);
    document.removeEventListener('keydown', onHandleEscapeKey);
    refs.modalOverlay.removeEventListener('click', modalOverlayClose);
    event.target.reset();
  }
};