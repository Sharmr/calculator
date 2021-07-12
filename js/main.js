function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


function operate(a, b, operation) {
    switch(operation) {
        case '+': add(a, b);
            break;
        case '-': subtract(a, b);
            break;
        case '*': multiply(a, b);
            break;
        case '/': divide(a, b);
            break;
        default: console.error("Invalid operator");
    }
}

function makeButtons() {
    const panel = document.querySelector('.panel');
    panel.style.gridTemplateColumns= "repeat("+3+", 1fr)" ;
    panel.style.gridTemplateRows= "repeat("+4+", 1fr)";

    for(let i = 1; i< 10; i++) {
        const btn = document.createElement("BUTTON");
        btn.innerText = i;
        btn.classList.add('numberButton');
        btn.id = i;
        btn.style.fontSize='15px';
        panel.appendChild(btn);
    }
    const z = document.createElement("BUTTON");
    z.innerText = 0;
    z.classList.add('numberButton');
    z.id = 0;
    z.style.fontSize='15px';
    z.style.gridColumnStart = '1';
    z.style.gridColumnEnd = 'span 2';
    panel.appendChild(z);


    const e = document.createElement("BUTTON");
    e.innerText = '=';
    e.classList.add('operator');
    e.id = 'equals';
    e.style.fontSize='15px';
    panel.appendChild(e);
}

window.onload = function() {
    makeButtons();
};