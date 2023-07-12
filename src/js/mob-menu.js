import { refs } from './refs';

export function toggleMenu() {
  document.body.classList.toggle('menu-open');
  refs.menu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

export function removeMenu() {
  refs.menu.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  document.body.classList.toggle('menu-open');
}
