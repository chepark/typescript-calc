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
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
let prevNum = null;
let currNum = null;
let prevOperator = "";
let currOperator = "";
let answer = 0;
const displayCalculation = (button) => {
    const numKeyOn = button.className.includes("button-number");
    const operatorKeyOn = button.className.includes("button-operator");
    const equalKeyOn = button.className.includes("button-submit");
    // click the num btn
    if (!currNum && numKeyOn) {
        calcAnswer.innerText = button.value;
    }
    else if (currNum && numKeyOn) {
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
    else if (prevNum && !currNum && operatorKeyOn) {
        calcProcess.innerText = prevNum.toString() + button.value;
        calcAnswer.innerText = prevNum.toString();
    }
    // click the equal button
    if (currNum && currOperator && equalKeyOn) {
        calculate(currOperator);
        calcProcess.innerHTML =
            (prevNum === null || prevNum === void 0 ? void 0 : prevNum.toString()) + currOperator + currNum.toString() + button.value;
        calcAnswer.innerText = answer.toString();
        prevNum = answer;
        prevOperator = currOperator;
        currOperator = "";
    }
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
const deleteLastNum = () => {
    if (calcAnswer.innerText.length <= 1) {
        calcAnswer.innerText = "0";
        currNum = null;
    }
    else {
        const deletedNum = calcAnswer.innerText.slice(0, calcAnswer.innerText.length - 1);
        currNum = parseFloat(deletedNum);
        calcAnswer.innerHTML = currNum.toString();
    }
};
const resetCalc = () => {
    prevNum = null;
    currNum = null;
    prevOperator = "";
    currOperator = "";
    answer = 0;
    calcAnswer.innerText = answer.toString();
    calcProcess.innerText = "";
};
// Theme controller
themeButtons.forEach((themeBtn) => {
    themeBtn.addEventListener("click", () => { });
});
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
deleteButton.addEventListener("click", (e) => {
    e.preventDefault;
    deleteLastNum();
});
