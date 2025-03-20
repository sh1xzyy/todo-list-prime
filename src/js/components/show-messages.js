import iziToast from 'izitoast';

// Show Different Type of Messages
export const showErrorMessage = message => {
  iziToast.error({
    iconUrl: './img/bi_x-octagon.svg',
    position: 'topRight',
    progressBarColor: '#B51B1B',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#EF4040',
  });
};

export const showSuccessMessage = message => {
  iziToast.error({
    iconUrl: '/img/bi_check2-circle.svg',
    position: 'topRight',
    progressBarColor: '#326101',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#59A10D',
  });
};

export const showWarningMessage = message => {
  iziToast.error({
    iconUrl: './img/bi_exclamation-triangle.svg',
    position: 'topRight',
    progressBarColor: '#BB7B10',
    message,
    messageColor: '#FAFAFB',
    backgroundColor: '#FFA000',
  });
};
