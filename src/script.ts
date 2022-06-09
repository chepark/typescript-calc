const logo = <HTMLHeadingElement>document.querySelector(".logo");
const calcContainer = <HTMLDivElement>document.querySelector(".calc-container");
const calcAnswerBox = <HTMLDivElement>(
  document.querySelector(".calc-answer-box")
);
const calcProcess = <HTMLDivElement>document.querySelector(".calc-process");
const calcAnswer = <HTMLDivElement>document.querySelector(".calc-answer");
const themeOptions = document.querySelector(".theme-options");
const themeButtons = Array.from(
  document.getElementsByClassName("theme-option")
) as HTMLInputElement[];
const keyboardBox = <HTMLDivElement>document.querySelector(".calc-keyboard");
const calculatorButtons = Array.from(
  document.getElementsByClassName("button-norm")
) as HTMLInputElement[];
const resetButton = document.getElementById("reset") as HTMLInputElement;
const equalButton = document.getElementById("equal") as HTMLInputElement;

// Theme controller
themeButtons.forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {});
});

let prevNum: number | null = null;
let currNum: number | null = null;
let prevOperator: string = "";
let currOperator: string = "";
let answer: number = 0;

const displayCalculation = (button: HTMLInputElement): void => {
  const numKeyOn: boolean = button.className.includes("button-number");
  const operatorKeyOn: boolean = button.className.includes("button-operator");

  // click the num btn
  if (!currNum && numKeyOn) {
    calcAnswer.innerText = button.value;
  } else if (currNum && numKeyOn) {
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

    calcProcess.innerText = prevNum?.toString() + currOperator;
  } else if (prevNum && currNum && operatorKeyOn) {
    prevOperator = currOperator;
    currOperator = button.value;

    calculate(prevOperator);
    calcProcess.innerText = answer.toString() + currOperator;
    calcAnswer.innerText = answer.toString();

    prevNum = answer;
    currNum = null;
  }
};

const deleteLastInput = (): void => {};

const resetCalc = (): void => {
  prevNum = null;
  currNum = null;
  prevOperator = "";
  currOperator = "";
  answer = 0;

  calcAnswer.innerText = answer.toString();
  calcProcess.innerText = "";
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
        return answer;
    }
};

calculatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e: Event) => {
    e.preventDefault();
    displayCalculation(btn);
  });
});

resetButton.addEventListener("click", (e: Event) => {
  e.preventDefault;
  resetCalc();
});

equalButton.addEventListener("click", () => {
  prevOperator = currOperator;
  calculate();
});
