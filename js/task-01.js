// HTML містить список категорій ul#categories.

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1. Порахувати кількість li.etem з forEach;
// 2. Вивести в консоль текст заголовку



const listCategories = document.querySelectorAll('.js-item');
console.log(listCategories);

console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach((li) => {
    console.log(`Category: ${li.firstElementChild.textContent}`);
    console.log(`Elements: ${li.lastElementChild.children.length}`);
})

console.log(listCategories.children);

