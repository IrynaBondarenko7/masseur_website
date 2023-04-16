import { onCloSeModalButtonClick, onOpenModalBtnClick } from './js/handlers';
import './js/mob-menu';
import { onBackdropModalClick, onCloseModal } from './js/modal';
import { refs } from './js/refs';

refs.modalOpenBtn.addEventListener('click', onOpenModalBtnClick);
refs.modalCloseBtn.addEventListener('click', onCloSeModalButtonClick);
refs.modalBackdrop.addEventListener('click', onBackdropModalClick);
