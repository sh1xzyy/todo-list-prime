import { showErrorMessage, showSuccessMessage } from './show-messages';
import { addLoader, removeLoader } from './loading';
import { deleteNode } from '../api/api-service';
import { updateMarkup } from './update-markup';
import { refs } from '../utils/refs';
import { modalOverlayClose, onHandleEscapeKey } from './modal-form';
import { onEditModalOverlayClick } from './edit-node';

// Delete or Edit Node
export const onNodeBtnsClick = async ({ target }) => {
  if (target.matches('#deleteNodeBtn')) {
    try {
      addLoader();
      const itemId = target.closest('li').dataset.id;
      await deleteNode(itemId);
      await updateMarkup();
      showSuccessMessage('Node Successfully deleted!');
    } catch (error) {
      showErrorMessage('Something went wrong with deleting node');
    } finally {
      removeLoader();
    }
  }
  if (target.matches('#editNodeBtn')) {
    const node = target.closest("li")
    const nodeId = node.dataset.id
    refs.modalForm.dataset.id = nodeId
    console.log(node);
    
    refs.modalOverlay.classList.add('is-open');
    refs.modalForm.addEventListener('submit', onEditModalOverlayClick);
    document.addEventListener('keydown', onHandleEscapeKey);
    refs.modalOverlay.addEventListener('click', modalOverlayClose);
  }
}
