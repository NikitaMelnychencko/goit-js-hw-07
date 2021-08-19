// Счетчик состоит из спана и кнопок,
//   которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой
// будет хранится текущее значение счетчика.
// Создай функции increment и decrement для
// увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы
// функций и обновление интерфейса

const counter = {
  counterValue: 0,
  increment() {
    console.log('increment->this', this);
    this.counterValue += 1;

  },
  decrement() {
    console.log('decrement->this', this);
    this.counterValue -= 1;
  }

}

const parent = document.querySelector('#counter');
const decrementBtn = parent.firstElementChild;
const incrementBtn = parent.lastElementChild;
const valueEj = document.querySelector('#value');

//event recorder
decrementBtn.addEventListener('click', ()=>{
  console.log('click on decrement');

  counter.decrement();
  console.log(counter);
  valueEj.textContent = counter.counterValue;
});
incrementBtn.addEventListener('click', ()=>{
  console.log('click on increment');

  counter.increment();
  console.log(counter);
  valueEj.textContent = counter.counterValue;
});