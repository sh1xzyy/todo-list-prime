import {
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
} from './show-messages';
import { getUniqueNodes } from '../api/api-service';
import { renderMarkup } from './render-functions';
import { refs } from '../utils/refs';
import { addLoader, removeLoader } from './loading';

// Search
export const onSearchFormSubmit = async event => {
  event.preventDefault();
  const inputValue = event.target.elements.searchNode.value.trim();

  if (!inputValue) {
    showWarningMessage('Fill field');
    return;
  }

  try {
    addLoader();
    const data = await getUniqueNodes(inputValue);

    if (!data || !data.length) {
      showErrorMessage('There is no such note matching your request.');
      return;
    }

    renderMarkup(data);
    showSuccessMessage('Search is successful');
  } catch (error) {
    showErrorMessage('Error with searching node!');
  } finally {
    removeLoader();
    refs.form.reset();
  }
};
