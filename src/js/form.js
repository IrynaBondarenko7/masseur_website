import Notiflix from 'notiflix';
import { refs } from './refs';

export const localStorageKeys = {
  KEY: 'form-state',
};

export function populateInputs() {
  const savedMessages = localStorage.getItem(localStorageKeys.KEY);

  if (savedMessages) {
    const parsedData = JSON.parse(savedMessages);

    for (const key in parsedData) {
      if (key === 'user_name') {
        refs.nameInput.value = parsedData.user_name;
      } else if (key === 'user_number') {
        refs.telInput.value = parsedData.user_number;
      } else if (key === 'user_comment') {
        refs.textInput.value = parsedData.user_comment;
      }
    }
  }
}

//Sending contact data to an email address
export function sendContactData() {
  const formState = {
    name: refs.nameInput.value,
    tel: refs.telInput.value,
    comment: refs.textInput.value,
  };
  fetch('https://formspree.io/f/xoqzbpdj', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formState),
  })
    .then(response => {
      if (response.ok) {
        Notiflix.Notify.success('Дякуємо за ваше повідомлення!');
      } else {
        Notiflix.Notify.warning('Сталася помилка. Спробуйте ще раз.');
      }
    })
    .catch(error => {
      Notiflix.Notify.warning('Сталася помилка. Спробуйте ще раз.');
    });
}
