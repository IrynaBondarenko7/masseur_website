export function isShowProcedureDescription(evt, id, button) {
  if (evt.target.id === id) {
    button.classList.toggle('is-hidden');

    if (evt.target.innerText === 'Детальніше') {
      evt.target.innerText = 'Приховати';
    } else if (evt.target.innerText === 'Приховати') {
      evt.target.innerText = 'Детальніше';
    }
  }
}
