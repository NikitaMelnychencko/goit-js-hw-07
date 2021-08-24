// Напиши скрипт, который бы при потере фокуса
// на инпуте, проверял его содержимое
// на правильное количество символов.

// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей,
//   используй CSS - классы valid и invalid.

const form = document.querySelector('#validation-input');
//form.addEventListener('focus', onInputExamination);
form.addEventListener('blur', onInputExamination);

function onInputExamination(event) {
  
  const value = event.currentTarget.value;

  if (value.length === Number(form.getAttribute('data-length'))) {
    functionValid('invalid','valid')
  } else {
    functionInvalid('valid','invalid')
  }  
}

function functionValid(invalid, valid) {
  if (form.classList.contains(invalid)) {
    form.classList.replace(invalid, valid)
    return
  } 
  form.classList.add(valid)
}

function functionInvalid(valid, invalid) {
  if (form.classList.contains(valid)) {
    form.classList.replace(valid,invalid)
    return
  } 
  form.classList.add(invalid)
 
}
