// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство
// font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.

const form = document.querySelector('#font-size-control');
form.addEventListener('input', onInputValueRefresh);

function onInputValueRefresh(event) {
  const value = event.currentTarget.value;
  const spanEl = document.querySelector('#text');
  console.log(spanEl);
  spanEl.style.fontSize = `${value}px`;
}
