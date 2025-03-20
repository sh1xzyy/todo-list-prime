import {
  onHandleEscapeKey,
  modalOverlayClose,
  onModalFormClick,
} from './js/components/modal-form';
import { onDeleteAllBtnClick } from './js/components/delete-all-nodes';
import { onSearchFormSubmit } from './js/components/search-form';
import { onNodeBtnsClick } from './js/components/node-btns';
import { updateMarkup } from './js/components/update-markup';
import { refs } from './js/utils/refs';

// Header Btns
const onHeaderBtnClick = ({ target }) => {
  if (target.matches('#deleteAllNodeBtn')) {
    onDeleteAllBtnClick();
  }
  if (target.matches('#addNodeBtn')) {
    refs.modalOverlay.classList.add('is-open');
    refs.modalForm.addEventListener('submit', onModalFormClick);
    document.addEventListener('keydown', onHandleEscapeKey);
    refs.modalOverlay.addEventListener('click', modalOverlayClose);
  }
};

refs.headerBtns.addEventListener('click', onHeaderBtnClick);
refs.form.addEventListener('submit', onSearchFormSubmit);
refs.list.addEventListener('click', onNodeBtnsClick);

updateMarkup();
