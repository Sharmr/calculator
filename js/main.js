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
        case '+': return add(a, b);
            break;
        case '-': return subtract(a, b);
            break;
        case '*': return multiply(a, b);
            break;
        case '/': return divide(a, b);
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
        btn.addEventListener('click', () => {
            addtoDisplay(btn.innerText);
        });
        panel.appendChild(btn);
    }
    const z = document.createElement("BUTTON");
    z.innerText = 0;
    z.classList.add('numberButton');
    z.id = 0;
    z.style.fontSize='15px';
    z.style.gridColumnStart = '1';
    z.style.gridColumnEnd = 'span 2';
    z.addEventListener('click', () => {
        addtoDisplay(z.innerText);
    });
    panel.appendChild(z);


    const e = document.createElement("BUTTON");
    e.innerText = '=';
    e.classList.add('operator');
    e.id = 'equals';
    e.style.fontSize='15px';
    panel.appendChild(e);
}

let display_value = '';
let variables = [];
let operators = [];


function addtoDisplay(c) {
    display_value += c;
    updateDisplay();
}

function updateDisplay() {
    const disp = document.getElementById('display');
    disp.innerText = display_value;
}

function calculate() {
    console.log(variables);
    console.log(operators);

    let i = 0;
    let result = variables[i];
    while(i < variables.length - 1) {
        result = operate(result, variables[i+1], operators[i]);
        i++;
    }
    display_value = result;
    updateDisplay();
    variables.length = 0;
    operators.length = 0;
}

function additionalButtons() {
    const clr = document.getElementById('clear');
    const add = document.getElementById('add');
    const subtract = document.getElementById('subtract');
    const multiply = document.getElementById('multiply');
    const divide = document.getElementById('divide');
    const equals = document.getElementById('equals');

    clr.addEventListener('click', () => {
       display_value = '';
       variables.length = 0;
       operators.length = 0;
       updateDisplay();
    });
    
    add.addEventListener('click', () => {
        if(display_value == '') {
            return;
        }
        variables.push(+display_value);
        operators.push('+');
        display_value = '';
    });

    subtract.addEventListener('click', () => {
        if(display_value == '') {
            return;
        }
        variables.push(+display_value);
        operators.push('-');
        display_value = '';
    });

    multiply.addEventListener('click', () => {
        if(display_value == '') {
            return;
        }
        variables.push(+display_value);
        operators.push('*');
        display_value = '';
    });

    divide.addEventListener('click', () => {
        if(display_value == '') {
            return;
        }
        variables.push(+display_value);
        operators.push('/');
        display_value = '';
    });

    equals.addEventListener('click', () => {
        if(display_value == '') {
            return;
        }
        variables.push(+display_value);
        calculate();
    });
}

window.onload = function() {
    makeButtons();
    additionalButtons();
    
    display_value = '';
    updateDisplay();
};




