"use strict";
const logo = document.querySelector(".logo");
const calcContainer = document.querySelector(".calc-container");
const calcAnswerBox = (document.querySelector(".calc-answer-box"));
const calcProcess = document.querySelector(".calc-process");
const calcAnswer = document.querySelector(".calc-answer");
const themeOptions = document.querySelector(".theme-options");
const themeButtons = Array.from(document.getElementsByClassName("theme-option"));
const keyboardBox = document.querySelector(".calc-keyboard");
const calculatorButtons = Array.from(document.getElementsByClassName("button-norm"));
const resetButton = document.getElementById("reset");
const equalButton = document.getElementById("equal");
// Theme controller
themeButtons.forEach((themeBtn) => {
    themeBtn.addEventListener("click", () => { });
});
let prevNum = null;
let currNum = null;
let prevOperator = "";
let currOperator = "";
let answer = 0;
const displayCalculation = (button) => {
    const numKeyOn = button.className.includes("button-number");
    const operatorKeyOn = button.className.includes("button-operator");
    // click the num btn
    if (!currNum && numKeyOn) {
        calcAnswer.innerText = button.value;
    }
    else if (currNum && numKeyOn) {
        prevOperator = currOperator;
        currOperator = "";
        calcAnswer.innerText += button.value;
    }
    currNum = parseFloat(calcAnswer.innerText);
    // click the operator btn
    if (!prevNum && currNum && operatorKeyOn) {
        prevNum = currNum;
        currNum = null;
        currOperator = button.value;
        calcProcess.innerText = (prevNum === null || prevNum === void 0 ? void 0 : prevNum.toString()) + currOperator;
    }
    else if (prevNum && currNum && operatorKeyOn) {
        prevOperator = currOperator;
        currOperator = button.value;
        calculate(prevOperator);
        calcProcess.innerText = answer.toString() + currOperator;
        calcAnswer.innerText = answer.toString();
        prevNum = answer;
        currNum = null;
    }
};
const deleteLastInput = () => { };
const resetCalc = () => {
    prevNum = null;
    currNum = null;
    prevOperator = "";
    currOperator = "";
    answer = 0;
    calcAnswer.innerText = answer.toString();
    calcProcess.innerText = "";
};
const calculate = (operator) => {
    if (prevNum && currNum)
        switch (operator) {
            case "+":
                return (answer = prevNum + currNum);
            case "-":
                return (answer = prevNum - currNum);
            case "/":
                return (answer = prevNum / currNum);
            case "*":
                return (answer = prevNum * currNum);
            default:
                return answer;
        }
};
calculatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        displayCalculation(btn);
    });
});
resetButton.addEventListener("click", (e) => {
    e.preventDefault;
    resetCalc();
});
equalButton.addEventListener("click", () => {
    prevOperator = currOperator;
    calculate();
});
