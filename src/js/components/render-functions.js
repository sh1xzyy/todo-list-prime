import { refs } from '../utils/refs';

// Markup
const createMarkup = ({ id, title, description }) => {
  return `
    <li class="nodes-item" data-id="${id}">
          <h3 class="nodes-item-title">${title}</h3>
          <p class="nodes-item-description">${description}</p>
          <div class="nodes-item-btns">
            <button class="edit-node-btn" type="button" id="editNodeBtn">Edit</button>
            <button class="delete-node-btn" type="button" id="deleteNodeBtn">Delete</button>
          </div>
        </li>
    `;
};

// Rendering nodes
export const renderMarkup = data => {
  const markup = data.map(node => createMarkup(node)).join('');
  refs.list.innerHTML = markup;
};
