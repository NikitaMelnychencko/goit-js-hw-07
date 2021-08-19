// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
//   подставляет его текущее значение
// в span#name - output.Если инпут пустой,
//   в спане должна отображаться строка 'незнакомец'.

const form = document.querySelector('#name-input');

form.addEventListener('input', onFormSubmit);

function onFormSubmit(event) {
  //event.preventDefault(); //отмена действия по умолчанию
  const value = event.currentTarget.value;
  const fromOutPut = document.querySelector('#name-output')
  if (value !== "") {
   fromOutPut.innerHTML = value; 
  } else {
    fromOutPut.innerHTML = "незнакомец";
  } 
}



//!для форм 
//const formData = new FormData(event.currentTarget);
  // const formData = new FormData(form)
  // formData.forEach((value,name)=> {
  //   console.log(value);
  //   console.log(name);
  // })