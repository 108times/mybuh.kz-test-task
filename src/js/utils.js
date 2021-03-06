import "./utilsStyles/style.css";

// scrolls to element in ${duraiton} time
export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;

  setTimeout(function animate() {
    requestAnimationFrame(() => {
      element.scrollTop = element.scrollTop + perTick;
    });
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

// creates delay..
export function delay(s) {
  if (!s) return;
  return new Promise((r) => setTimeout(r, s * 1000));
}

// creates text typing animation..
export async function textTypingAnimation(
  selector,
  duration = 800,
  delayDuration = 0
) {
  const elem = document.querySelector(selector);
  let text = elem.textContent;
  elem.textContent = "";
  const stepDuration = (duration * 1000) / text.length;

  const content = document.createElement("span");
  content.className = "content";
  elem.append(content);

  await delay(delayDuration);

  // create blinking text cursor
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  elem.append(cursor);

  function step() {
    content.insertAdjacentHTML(
      "beforeend",
      `<span class='letter'>${text[0]}</span>`
    );
    text = text.slice(1, text.length);
    if (!text.length) {
      cursor.remove();
      return 1;
    } else {
      setTimeout(step, stepDuration);
    }
  }

  step();
}

export function doActionToMultipleElements({
  handler,
  elementsSelectors = "",
}) {
  console.log(elementsSelectors.split(","));
  if (!elementsSelectors) return;

  const elements = elementsSelectors
    .split(",")
    .map((selector) => document.querySelectorAll(selector.trim()));

  elements.forEach((selection) => {
    if (!selection.length) return;
    if (selection.length === 1) {
      return handler(selection[0]);
    }
    selection.forEach(handler);
  });
}

export const showAction = (id, e) => {
  // show needed answer and hide other answers
  const answers = document.querySelectorAll(".faq-element__answer");
  const questions = document.querySelectorAll(".faq-element__question");

  answers.forEach((itm) => itm.classList.remove("visible"));
  questions.forEach((itm) => itm.classList.remove("active"));

  const answer = document.querySelector(`[data-answer-id="${id}"]`);
  const question = document.querySelector(`[data-question-id="${id}"]`);
  console.log(answer.opened);
  if (!answer.opened) {
    window.lastAnswer && (window.lastAnswer.opened = false);

    answer.opened = true;
    answer.classList.add("visible");
    question.classList.add("active");
    window.lastAnswer = answer;
    // if (window.lastQuestion) {
    //   window.lastQuestion.classList.remove("active");
    // }
    // window.lastQuestion = question;
  }
};
