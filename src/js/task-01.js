//condition
// Напиши скрипт, который выполнит следующие операции.

// 1)Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// 2)Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

//!condition 1
const valueEl = document.querySelectorAll('.item');
console.log('Kоличество категорий:', valueEl.length);

//  !condition 2
const result = [...valueEl].reduce((acc, elem) => {
  const categoryEl = elem.querySelectorAll('h2');
  const listValueEl = elem.querySelectorAll('li');

  console.log('Категория:', categoryEl[0].textContent);
  console.log('Количество элементов:', listValueEl.length);
  acc.push({ category: categoryEl[0].textContent, amountOfElements: listValueEl.length })
  return acc
}, [])

console.log(result);

