const historyUL = document.getElementById("history");
const historyTitle = document.getElementById("history-title");
const fieldDiv = document.getElementById("root");
const resultField = document.getElementById("result");

let firstField = document.getElementById("first-number");
let secondField = document.getElementById("second-number");
let operator = document.getElementById("operator");
let calcBtn = document.getElementById("calc-btn");
let numberOfLength = 0;

historyTitle.style.display = "none";
calcBtn.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  let firstFieldValue = Number(firstField.value);
  let secondFieldValue = Number(secondField.value);
  let operatorValue = operator.value;

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
  operator.value = "";

  historyTitle.style.display = "inline-block";

  if (resultField.innerHTML != "") {
    if (numberOfLength < 5) {
      let li = document.createElement("li");
      let lastNumber = resultField.innerText;

      li.innerText = lastNumber;
      historyUL.appendChild(li);

      numberOfLength = historyUL.children.length;
      console.log(numberOfLength);
    } else {
      historyUL.replaceChildren();

      let li = document.createElement("li");
      let lastNumber = resultField.innerText;
      li.innerText = lastNumber;
      historyUL.appendChild(li);
      numberOfLength = historyUL.children.length;
    }
  }
}
