import { showErrorMessage, showSuccessMessage } from './show-messages';
import { addLoader, removeLoader } from './loading';
import { deleteNode } from '../api/api-service';
import { updateMarkup } from './update-markup';

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
    // TODO: Edit node
  }
};
