// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// let counterValue = 0;

// const counter = document.querySelector('#counter')
// console.log(counter)

// counter.addEventListener('click', handlerClick);

// function handlerClick (event){
//     console.log(event.currentTarget)
// }

const selectors = {
    counter: document.querySelector('#value'),
    btnDecrement: document.querySelector('.js-btn-decrement'),
    btnIncrement: document.querySelector('.js-btn-increment')
}

selectors.btnDecrement.addEventListener('click', handlerDecrement);
selectors.btnIncrement.addEventListener('click', handlerIncrement);

let counterValue = 0;

function handlerDecrement(){
    counterValue -= 1;
    selectors.counter.textContent = `${counterValue}`
}

function handlerIncrement(){
    counterValue += 1;
    selectors.counter.textContent  = `${counterValue}`
}


