const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.querySelector('#ingredients');

const liElements = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = `${ingredient}`;
  return itemEl
})
console.log(liElements)

list.append(...liElements);


// const list = document.querySelector('#ingredients');

// const li = document.createElement('li');
// li.classList.add('item');
// li.textContent = 'Potatoes';

// const li2 = document.createElement('li');
// li2.classList.add('item');
// li2.textContent = 'Mushrooms';

// const li3 = document.createElement('li');
// li3.classList.add('item');
// li3.textContent = 'Garlic';

// const li4 = document.createElement('li');
// li4.classList.add('item');
// li4.textContent = 'Tomatos';

// const li5 = document.createElement('li');
// li5.classList.add('item');
// li5.textContent = 'Herbs';

// const li6 = document.createElement('li');
// li6.classList.add('item');
// li6.textContent = 'Condiments';

// const items = [li, li2, li3, li4, li5, li6];

// list.append(li, li2, li3, li4, li5, li6);

// console.log(list);



