import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from './show-messages';
import { addLoader, removeLoader } from './loading';
import { addNewNode } from '../api/api-service';
import { updateMarkup } from './update-markup';
import { refs } from '../utils/refs';

// Modal Form
export const onModalFormClick = async event => {
  event.preventDefault();

  const inputValue = event.target.elements.nodeInput.value.trim();
  const textareaValue = event.target.elements.nodeTextarea.value.trim();

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
    await addNewNode(userNode);
    await updateMarkup();
    showSuccessMessage('Added new node!');
  } catch (error) {
    showErrorMessage('Error adding note');
  } finally {
    closeModal();
    removeLoader();
    refs.modalForm.removeEventListener('submit', onModalFormClick);
    document.removeEventListener('keydown', onHandleEscapeKey);
    refs.modalOverlay.removeEventListener('click', modalOverlayClose);
    event.target.reset();
  }
};

// Modal Close
export const modalOverlayClose = event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
  if (event.target.matches('#modalCloseBtn')) {
    closeModal();
  }
};

export const onHandleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

export const closeModal = () => {
  refs.modalOverlay.classList.remove('is-open');
};
