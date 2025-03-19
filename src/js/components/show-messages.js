import iziToast from "izitoast"

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
      iconUrl: './img/bi_x-octagon.svg',
      position: 'topRight',
      progressBarColor: '#B51B1B',
      message,
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
    });
  };