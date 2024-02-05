const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let noButtonTextIndex = 0;
let yesButtonScale = 1.0;

const noButtonTexts = [
  "Are You Sure?",
  "Really Sure?",
  "Think Again",
  "Last Chance",
  "Are you certain?",
  "One More Time",
  "Absolutely?",
  "Final Decision?",
  "No going back now!",
  "Last Opportunity"
];

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 14th!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  yesButtonScale = 1.0;
  yesBtn.style.transform = `scale(${yesButtonScale})`;
  noBtn.style.display = "none"; // Hide the "No" button
});

noBtn.addEventListener("click", () => {
  noBtn.textContent = noButtonTexts[noButtonTextIndex];
  noButtonTextIndex = (noButtonTextIndex + 1) % noButtonTexts.length;
  yesButtonScale += 0.1;
  yesBtn.style.transform = `scale(${yesButtonScale})`;
});
