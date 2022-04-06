const fieldDiv = document.getElementById('root');
const resultField = document.getElementById('result');

let firstField = document.getElementById('first-number');
let secondField = document.getElementById('second-number');
let operator = document.getElementById('operator');
let calcBtn = document.getElementById('calc-btn');


calcBtn.addEventListener('click', onClick);

function onClick() {
    let firstFieldValue = Number(firstField.value);
    let secondFieldValue = Number(secondField.value);
    let operatorValue = operator.value;

    if( isNaN(firstFieldValue) || isNaN(secondFieldValue)){
        return alert("Both number fields must be a number");
    }

    if (!firstFieldValue || !secondFieldValue || !operatorValue) {
        return alert("All fields are required and with correct type!")
    }
  
    if (operatorValue == "+") {
        resultField.innerText = firstFieldValue + secondFieldValue;
    } 
    else if (operatorValue == "-") {
        resultField.innerText = firstFieldValue - secondFieldValue;
    }
    else if (operatorValue == "/") {
        resultField.innerText = firstFieldValue / secondFieldValue;
    }
    else if (operatorValue == "*") {
        resultField.innerText = firstFieldValue * secondFieldValue;
   
    } else {
        return alert("Operator must be some of the following: +, -, /, *")
    }
    

    firstFieldValue = "";
    secondFieldValue = "";
    operatorValue = "";

}
