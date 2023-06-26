let array = [1, 2, 3, 4, 5];
const actionBtns = document.querySelectorAll(".btns-container button");

function disableBtns() {
    actionBtns.forEach(btn => {
        btn.disabled = true;
    });
}

function enableBtns() {
    actionBtns.forEach(btn => {
        btn.disabled = false;
    });
}

function pushElement() {
    disableBtns();
    const value = Math.floor(Math.random() * 10) + 1;
    array.push(value);
    const newElement = document.createElement('div');
    newElement.classList.add('element', 'animation-in');
    newElement.innerText = value;
    newElement.addEventListener('animationend', () => {
        newElement.classList.remove('animation-in');
        enableBtns();
    });
    document.querySelector('.array').appendChild(newElement);
}

function popElement() {
    disableBtns();
    array.pop();
    const element = document.querySelector('.array').querySelector(".element:last-child");
    element.classList.add('animation-out');
    element.addEventListener('animationend', () => {
        element.remove();
        enableBtns();
    });
}

function shiftElement() {
    disableBtns();
    array.shift();
    const element = document.querySelector('.array').querySelector(".element:first-child");
    element.classList.add('animation-out');
    element.addEventListener('animationend', () => {
        element.remove();
        enableBtns();
    });
}

function unshiftElement() {
    disableBtns();
    const value = Math.floor(Math.random() * 10) + 1;
    array.unshift(value);
    const newElement = document.createElement('div');
    newElement.classList.add('element', 'animation-in');
    newElement.innerText = value;
    newElement.addEventListener('animationend', () => {
        newElement.classList.remove('animation-in');
        enableBtns();
    });
    document.querySelector('.array').insertBefore(newElement, document.querySelector('.array').querySelector(".element:first-child"));
}

function sliceElement(includedStart = 1, notIncludedEnd = 3) {
    disableBtns();
    const arrayElement = document.querySelectorAll('.element');
    arrayElement.forEach((element, index) => {
        if (index < includedStart || index > notIncludedEnd - 1) {
            element.classList.add('animation-out');
            element.addEventListener('animationend', () => {
                element.remove();
                if (index === array.length - 1) {
                    enableBtns();
                    array = array.slice(includedStart, notIncludedEnd);
                }
            });
        }
    });
}

function sortElement() {
    disableBtns();
    const arrayElement = document.querySelectorAll('.element');
    array = array.sort();
    arrayElement.forEach((element, index) => {
        element.classList.add('animation-out');
        element.addEventListener('animationend', () => {
            element.innerText = array[index];
            element.classList.remove('animation-out');
            element.classList.add('animation-in');
            element.addEventListener('animationend', () => {
                element.classList.remove('animation-in');
                if (index === array.length - 1) {
                    enableBtns();
                }
            });
        });
    });
}