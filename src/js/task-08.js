// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов
// очищается.

// Создай функцию createBoxes(amount),
//   которая принимает 1 параметр amount - число.Функция
// создает столько div, сколько указано в amount и добавляет
// их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и
// выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const parent = document.querySelector('#controls');
const form = parent.firstElementChild;
const renderBtn = document.querySelector('button');
const destroyBtn = parent.lastElementChild;
const boxEl = document.querySelector('#boxes');

form.addEventListener('input', onInputValueForm);

destroyBtn.addEventListener('click', onInputValueDestroy);

const createBoxes = (amount) => {
  const listEl = document.querySelector('#boxes');
  const arr = []
  for (let i = 0; i < amount; i += 1){
    let sizeValue = 30;
    if (amount > 1) {
      sizeValue = 30 + amount * 10; 
    }
    console.log(sizeValue);
    const elementIs = document.createElement("div");
    elementIs.style.width = `${sizeValue}px`;
    elementIs.style.height = `${sizeValue}px`;
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    elementIs.style.background = color;
    arr.push(elementIs)
    break
  }
  return listEl.append(...arr)

 } 

function onInputValueForm(event) {
  const value = event.currentTarget.value;
  console.log(value);
  renderBtn.addEventListener('click', e => {
    createBoxes(value)
  })
}

destroyBtn.addEventListener('click', onInputValueDestroy);

function onInputValueDestroy(event) {
  boxEl.innerHTML =""
}












 


