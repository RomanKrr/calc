// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
// let result = document.createElement('h1');
// let result = document.createElement('input');
// result.setAttribute('type', 'text');
// result.setAttribute('name', 'display');
// result.className = 'result';

// let container = document.createElement('div');
// let grid = document.createElement('div');

// let plus = document.createElement('button');
// let minus = document.createElement('button');
// let mult = document.createElement('button');
// let divide = document.createElement('button');

// let equal = document.createElement('button');
// let factorial = document.createElement('button');
// let module = document.createElement('button');
// let pi = document.createElement('button');

// let one = document.createElement('button');
// let two = document.createElement('button');
// let tree = document.createElement('button');
// let four = document.createElement('button');
// let five = document.createElement('button');
// let six = document.createElement('button');
// let seven = document.createElement('button');
// let eight = document.createElement('button');
// let nine = document.createElement('button');

// let brackets = document.createElement('button');
// let sqrt = document.createElement('button');
// let power = document.createElement('button');
// let del = document.createElement('button');
// let ac = document.createElement('button');
// let dote = document.createElement('button');

// container.className = 'container';
// // result.className = 'result';
// grid.className = 'grid';
// equal.className = 'equal';

// del.id = 'del';

// plus.textContent = '+';
// minus.textContent = '-';
// mult.textContent = '*';
// divide.textContent = '/';

// equal.textContent = '=';
// factorial.textContent = 'x!';
// module.textContent = '||';
// pi.textContent = '𝝿';
// brackets.textContent = '()';
// sqrt.textContent = '√';
// result.textContent = '0';
// power.textContent = '²';

// del.textContent = 'DEL';
// ac.textContent = 'AC';
// dote.textContent = '.';

// one.textContent = '1';
// two.textContent = '2';
// tree.textContent = '3';
// four.textContent = '4';
// five.textContent = '5';
// six.textContent = '6';
// seven.textContent = '7';
// eight.textContent = '8';
// nine.textContent = '9';

// document.body.appendChild(container);
// container.appendChild(result);

// container.appendChild(grid);


// grid.appendChild(plus);
// grid.appendChild(minus);
// grid.appendChild(mult);
// grid.appendChild(divide);

// grid.appendChild(equal);

// grid.appendChild(one);
// grid.appendChild(two);
// grid.appendChild(tree);
// grid.appendChild(four);

// grid.appendChild(factorial);

// grid.appendChild(five);
// grid.appendChild(six);
// grid.appendChild(seven);
// grid.appendChild(eight);
// grid.appendChild(module);
// grid.appendChild(nine);

// grid.appendChild(brackets);
// grid.appendChild(sqrt);
// grid.appendChild(power);
// grid.appendChild(pi);

// grid.appendChild(ac);
// grid.appendChild(dote);
// grid.appendChild(del);




// function button(input){
//     display.value += input;
// }



const result = document.getElementById("result");

function text(input) {
    if (input === '√') {
        result.value = Math.sqrt(parseFloat(result.value));
    } else if (input === '!') {
        // let number = parseFloat(result.value);
        let number = result.value;
        result.value = factorial(number);
    } else {
        result.value += input;
    }
}
function factorial(num) {
    if (num < 0) {
        return "Error: Factorial of a negative number is undefined";
    } else if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
function clearInput() {
    result.value = '';
}
function del() {
    result.value = result.value.toString().slice(0, -1)
}
function calculate() {
    result.value = eval(result.value);
}
// function sqrt(input){
//     result.value += Math.sqrt(parseFloat(result.value));
// }