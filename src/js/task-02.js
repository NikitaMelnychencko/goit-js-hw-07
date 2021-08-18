//Напиши скрипт, который для каждого элемента массива ingredients 
//создаст отдельный li, после чего вставит все li за одну
//операцию в список ul.ingredients.Для создания DOM - узлов
//используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(textAdd => {
  const itemIsAdd =  document.createElement('li')
  itemIsAdd.textContent = `${textAdd}`
  itemIsAdd.classList.add('ingredients-list__item')
  const listEl = document.querySelector('ul')
  return listEl.appendChild(itemIsAdd)
} )


