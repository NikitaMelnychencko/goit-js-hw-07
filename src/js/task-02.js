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

// var 1

const result = (item) => {
  const itemIsAdd =  document.createElement('li')
  itemIsAdd.textContent = `${item}`
  itemIsAdd.classList.add('ingredients-list__item')
  return itemIsAdd
}
const element = ingredients.map(result)
const listEl = document.querySelector('ul')
listEl.append(...element)

// var 2

// const result = ingredients.reduce((acc, item) => {
//   const itemIsAdd =  document.createElement('li')
//   itemIsAdd.textContent = `${item}`
//   itemIsAdd.classList.add('ingredients-list__item')
//   acc.push(itemIsAdd)
//   return acc
// },[])
// const listEl = document.querySelector('ul')
// listEl.append(...result)

