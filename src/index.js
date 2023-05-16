import throttle from 'lodash.throttle';
import {
  onCloSeModalButtonClick,
  onFormInput,
  onFormSubmit,
  onOpenModalBtnClick,
} from './js/handlers';
import './js/mob-menu';
import { onBackdropModalClick } from './js/modal';
import { refs } from './js/refs';
import { populateInputs } from './js/form';

refs.modalOpenBtn.addEventListener('click', onOpenModalBtnClick);
refs.modalCloseBtn.addEventListener('click', onCloSeModalButtonClick);
refs.modalBackdrop.addEventListener('click', onBackdropModalClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateInputs();
