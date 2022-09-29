// DOM Element
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
const deleteButton = document.getElementById("delete") as HTMLInputElement;
const equalButton = document.getElementById("equal") as HTMLInputElement;
const themedElements = Array.from(
  document.querySelectorAll('[data-theme="1"]')
) as HTMLElement[];
const theme1 = document.querySelector("[data-theme-value='1']");
const theme2 = document.querySelector("[data-theme-value='2']");
const theme3 = document.querySelector("[data-theme-value='3']");

// Calculator public variables
let prevNum: number | null = null;
let currNum: number | null = null;
let prevOperator: string = "";
let currOperator: string = "";
let answer: number = 0;

const displayCalculation = (button: HTMLInputElement): void => {
  const numKeyOn: boolean = button.className.includes("button-number");
  const operatorKeyOn: boolean = button.className.includes("button-operator");
  const equalKeyOn: boolean = button.className.includes("button-submit");

  // click the num btn
  if (!currNum && numKeyOn) {
    calcAnswer.innerText = button.value;
  } else if (currNum && numKeyOn) {
    calcAnswer.innerText += button.value;
  }
  currNum = parseFloat(calcAnswer.innerText);

  // click the operator btn
  if (!prevNum && currNum && operatorKeyOn) {
    prevNum = currNum;
    currNum = null;
    currOperator = button.value;

    calcProcess.innerText = prevNum.toString() + currOperator;
  } else if (prevNum && currNum && operatorKeyOn) {
    prevOperator = currOperator;
    currOperator = button.value;

    calculate(prevOperator);
    calcProcess.innerText = answer.toString() + currOperator;
    calcAnswer.innerText = answer.toString();

    prevNum = answer;
    currNum = null;
  } else if (prevNum && !currNum && operatorKeyOn) {
    calcProcess.innerText = prevNum.toString() + button.value;
    calcAnswer.innerText = prevNum.toString();
  }

  // click the equal button
  if (currNum && currOperator && equalKeyOn) {
    calculate(currOperator);
    calcProcess.innerHTML =
      prevNum?.toString() + currOperator + currNum.toString() + button.value;
    calcAnswer.innerText = answer.toString();

    prevNum = answer;
    prevOperator = currOperator;
    currOperator = "";
  }
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

const deleteLastNum = (): void => {
  if (calcAnswer.innerText.length <= 1) {
    calcAnswer.innerText = "0";
    currNum = null;
  } else {
    const deletedNum = calcAnswer.innerText.slice(
      0,
      calcAnswer.innerText.length - 1
    );

    currNum = parseFloat(deletedNum);
    calcAnswer.innerHTML = currNum.toString();
  }
};

const resetCalc = (): void => {
  prevNum = null;
  currNum = null;
  prevOperator = "";
  currOperator = "";
  answer = 0;

  calcAnswer.innerText = answer.toString();
  calcProcess.innerText = "";
};

const changeThemeValue = (themeValue: string): void => {
  themedElements.forEach((elem) => {
    elem.dataset.theme = themeValue;
  });
};

const editCheckedInClass = (e: Event): void => {
  const toggleBox = document.querySelector(".theme-options") as HTMLDivElement;

  const toggleButtons: Element[] = [...toggleBox.children];
  toggleButtons.forEach((btn) => {
    if (btn == e.target) {
      btn.classList.add("checked");
    } else if (btn !== e.target) {
      btn.classList.remove("checked");
    }
  });
};

// EventListeners
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

deleteButton.addEventListener("click", (e: Event) => {
  e.preventDefault;
  deleteLastNum();
});

themeButtons.forEach((themeBtn: any) => {
  themeBtn.addEventListener("click", (e: Event) => {
    e.preventDefault;
    const themeValue = themeBtn.dataset.themeValue;
    changeThemeValue(themeValue!);
  });
});

theme1?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  editCheckedInClass(e);
});

theme2?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  editCheckedInClass(e);
});

theme3?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  editCheckedInClass(e);
});
