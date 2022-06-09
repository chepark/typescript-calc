const calcContainer = <HTMLDivElement>document.querySelector(".calc-container");
const logo = <HTMLHeadingElement>document.querySelector(".logo");
const calcAnswerBox = <HTMLDivElement>(
  document.querySelector(".calc-answer-box")
);
const calcAnswer = <HTMLDivElement>document.querySelector(".calc-answer");
const themeOptions = document.querySelector(".theme-options");
const themeButtons: Element[] = Array.from(
  document.getElementsByClassName("theme-option")
);
const keyboardBox = <HTMLDivElement>document.querySelector(".calc-keyboard");
const numButtons = Array.from(
  document.getElementsByClassName("button-norm")
) as HTMLInputElement[];

// Theme controller
themeButtons.forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {});
});

let prevNum: number | null;
let currNum: number | null;
let operator: string;
let isOperatorOn: boolean = false;
let answer: number = 0;

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

const displayCalculation = () => {};

const deleteLastInput = (): void => {};

const resetCalc = (): void => {
  prevNum = 0;
  currNum = null;
  isOperatorOn = false;
};

const calculate = (operator: string): number | undefined => {
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
