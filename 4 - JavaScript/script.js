// Fun Site - https://clickclickclick.click/#2ca40fde22ac654018b13e8c9990c6e9


let title = document.getElementById('header');
let input = document.getElementById('input');
let colorPicker = document.getElementById('color-picker');
// innerText -> Get HTML Content
// innerHTML -> Set or read HTML Content

const receiveText = () => {
    let inputText = input.value
    console.log(inputText);
}

const changeStatus = () => {
    let square = document.getElementById('square');
    square.style.backgroundColor = colorPicker.value;

    // let square = document.getElementById('square');
    // if (square.classList.contains('good')) {
    //     square.classList.remove('good');
    //     square.classList.add('bad');
    // } else {
    //     square.classList.remove('bad');
    //     square.classList.add('good');
    // }
}

// # BASICS #

// Objects!
const obj = {
    name: "Fernanda",
    age: 19,
    works: {
        first: "MixPrint",
        second: "TudoOtica",
        third: "MPPR",
        present: "Bosch"
    },
    city: "Araucária"
}

console.log(obj.name)
console.log(obj.works.present)

// Common Function
function sum (a, b){
    return a + b
}

console.log(sum(1,5))
console.log(sum("Fernanda", "Fialho"))

// Declared Function
const mult = function (a, b) {
    return a * b;
}

// Arrow Function
const subArrow = ( a, b ) => a - b;
console.log(subArrow(6, 9));