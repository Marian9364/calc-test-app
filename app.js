const historyUL = document.getElementById("history");
const historyTitle = document.getElementById("history-title");
const fieldDiv = document.getElementById("root");
const resultField = document.getElementById("result");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

let firstField = document.getElementById("first-number");
let secondField = document.getElementById("second-number");
let calcBtn = document.getElementById("calc-btn");



let operatorValue = "";
let numberOfLength = 0;

historyTitle.style.display = "none";

addBtn.addEventListener("click", onAdd);
subtractBtn.addEventListener("click", onSubtract);
multiplyBtn.addEventListener("click", onMultiply);
divideBtn.addEventListener("click", onDivide);

calcBtn.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  let firstFieldValue = Number(firstField.value);
  let secondFieldValue = Number(secondField.value);
  let firstFieldValueForHistory = firstFieldValue;
  let secondFieldValueForHistory = secondFieldValue;

  if (isNaN(firstFieldValue) || isNaN(secondFieldValue)) {
    return alert("Both number fields must be a number");
  }

  if (!firstFieldValue || !secondFieldValue || !operatorValue) {
    return alert("All fields are required and with correct type!");
  }

  if (operatorValue == "+") {
    resultField.innerText = firstFieldValue + secondFieldValue;
  } else if (operatorValue == "-") {
    resultField.innerText = firstFieldValue - secondFieldValue;
  } else if (operatorValue == "/") {
    resultField.innerText = firstFieldValue / secondFieldValue;
  } else if (operatorValue == "*") {
    resultField.innerText = firstFieldValue * secondFieldValue;
  } else {
    return alert("Operator must be some of the following: +, -, /, *");
  }
  
  firstField.value = "";
  secondField.value = "";

  historyTitle.style.display = "inline-block";

  if (resultField.innerHTML != "") {
    if (numberOfLength < 5) {
      let li = document.createElement("li");
      let equation = `${firstFieldValue} ${operatorValue} ${secondFieldValue} = ${resultField.innerText}`;

      li.innerText = equation;
      historyUL.appendChild(li);

      numberOfLength = historyUL.children.length;
    } else {
      historyUL.replaceChildren();

      let li = document.createElement("li");
      let lastNumber = `${firstFieldValue} ${operatorValue} ${secondFieldValue} = ${resultField.innerText}`;
      li.innerText = lastNumber;
      historyUL.appendChild(li);
      numberOfLength = historyUL.children.length;
    }
  }
  addBtn.style.backgroundColor = "aquamarine";
  subtractBtn.style.backgroundColor = "aquamarine";
  multiplyBtn.style.backgroundColor = "aquamarine";
  divideBtn.style.backgroundColor = "aquamarine";
}

function onAdd(e) {
  e.preventDefault();

  operatorValue = "+";
  addBtn.style.backgroundColor = "rgb(254, 153, 237)";
}

function onSubtract(e) {
  e.preventDefault();

  operatorValue = "-";
  subtractBtn.style.backgroundColor = "rgb(254, 153, 237)";
}

function onMultiply(e) {
  e.preventDefault();

  operatorValue = "*";
  multiplyBtn.style.backgroundColor = "rgb(254, 153, 237)";
}

function onDivide(e) {
  e.preventDefault();

  operatorValue = "/";
  multiplyBtn.style.backgroundColor = "rgb(254, 153, 237)";
}
