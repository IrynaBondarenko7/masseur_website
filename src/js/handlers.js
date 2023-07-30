import { localStorageKeys, sendContactData } from './form';
import { onCloseModal, onModalOpen } from './modal';
import { isShowProcedureDescription } from './procedures';
import { refs } from './refs';

export let formData =
  JSON.parse(localStorage.getItem(localStorageKeys.KEY)) || {};

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

  localStorage.removeItem(localStorageKeys.KEY);

  formData = {};

  onCloseModal();
}

export function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(localStorageKeys.KEY, JSON.stringify(formData));
}

export function onDetailsBtnClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  isShowProcedureDescription(
    evt,
    'detail-btn-1',
    refs.procedureFullDescriptionFirst
  );
  isShowProcedureDescription(
    evt,
    'detail-btn-2',
    refs.procedureFullDescriptionSecond
  );

  isShowProcedureDescription(
    evt,
    'detail-btn-3',
    refs.procedureFullDescriptionThird
  );
}
