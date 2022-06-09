"use strict";
const calcContainer = document.querySelector(".calc-container");
const logo = document.querySelector(".logo");
const calcAnswerBox = (document.querySelector(".calc-answer-box"));
const calcAnswer = document.querySelector(".calc-answer");
const themeOptions = document.querySelector(".theme-options");
const themeButtons = Array.from(document.getElementsByClassName("theme-option"));
const keyboardBox = document.querySelector(".calc-keyboard");
const numButtons = Array.from(document.getElementsByClassName("button-norm"));
// Theme controller
themeButtons.forEach((themeBtn) => {
    themeBtn.addEventListener("click", () => { });
});
let prevNum;
let currNum;
let operator;
let isOperatorOn = false;
let answer = 0;
numButtons.forEach((numBtn) => {
    numBtn.addEventListener("click", () => {
        if (isOperatorOn == false) {
            calcAnswer.innerText == "0"
                ? (calcAnswer.innerText = numBtn.value)
                : (calcAnswer.innerText += numBtn.value);
            prevNum = parseFloat(numBtn.value);
        }
    });
});
const displayCalculation = () => { };
const deleteLastInput = () => { };
const resetCalc = () => {
    prevNum = 0;
    currNum = null;
    isOperatorOn = false;
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
                return 0;
        }
};
