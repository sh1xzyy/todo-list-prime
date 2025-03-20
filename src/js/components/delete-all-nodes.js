import { deleteNode, getAllNodes } from '../api/api-service';
import { addLoader, removeLoader } from './loading';
import { showErrorMessage } from './show-messages';
import { updateMarkup } from './update-markup';

// Delete All Items
export const onDeleteAllBtnClick = async () => {
  try {
    addLoader();
    const data = await getAllNodes();
    if (!data) {
      showErrorMessage('Nothing to delete');
      return;
    }

    const result = await Promise.allSettled(
      data.map(({ id }) => deleteNode(id))
    );

    console.log(result);

    await updateMarkup();
  } catch (error) {
    showErrorMessage('Something went wrong with deleting all Nodes!');
  } finally {
    removeLoader();
  }
};
