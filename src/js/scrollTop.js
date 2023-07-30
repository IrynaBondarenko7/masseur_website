import { refs } from './refs';

export function onBtnUPClick() {
  topFunction();
}

export function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    refs.btnUp.style.display = 'block';
  } else {
    refs.btnUp.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
