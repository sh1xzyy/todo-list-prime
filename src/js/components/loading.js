import { refs } from '../utils/refs';

// Loading
export const addLoader = () => {
  refs.loader.classList.add('is-loading');
};

export const removeLoader = () => {
  refs.loader.classList.remove('is-loading');
};
