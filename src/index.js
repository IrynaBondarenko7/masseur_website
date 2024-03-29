import throttle from 'lodash.throttle';
import {
  onCloSeModalButtonClick,
  onFormInput,
  onFormSubmit,
  onOpenModalBtnClick,
} from './js/handlers';
import { onBackdropModalClick } from './js/modal';
import { refs } from './js/refs';
import { populateInputs } from './js/form';
import { removeMenu, toggleMenu } from './js/mob-menu';
import { onDetailsBtnClick } from './js/handlers';
import { onBtnUPClick, scrollFunction } from './js/scrollTop';

refs.modalOpenBtn.addEventListener('click', onOpenModalBtnClick);
refs.modalCloseBtn.addEventListener('click', onCloSeModalButtonClick);
refs.modalBackdrop.addEventListener('click', onBackdropModalClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
refs.menuList.addEventListener('click', removeMenu);
refs.proceduresList.addEventListener('click', onDetailsBtnClick);
refs.btnUp.addEventListener('click', onBtnUPClick);

populateInputs();

window.onscroll = function () {
  scrollFunction();
};
