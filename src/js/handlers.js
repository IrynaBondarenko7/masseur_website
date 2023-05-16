import { STORAGE_KEY, formData, sendContactData } from './form';
import { onCloseModal, onModalOpen } from './modal';
import { refs } from './refs';

export function onOpenModalBtnClick() {
  onModalOpen();
}
export function onCloSeModalButtonClick() {
  onCloseModal();
}

export function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.nameInput.value === '' || refs.telInput.value === '') {
    return alert('Заповніть всі поля!');
  }

  //Sending contact data to an email address
  sendContactData();

  evt.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  formData = {};

  onCloseModal();
}

export function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
