import { renderMarkup } from './render-functions';
import { getAllNodes } from '../api/api-service';

// Update Markup
export const updateMarkup = async () => {
  const data = await getAllNodes();
  renderMarkup(data);
};
