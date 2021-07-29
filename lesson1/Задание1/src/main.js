
import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { switchTab, renderActiveTab } from "./tabs.js";

let dateCalcForm = document.getElementById("datecalc");
let dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

const timerForm = document.querySelector('#timer');
const timerResult = document.querySelector('#timer__result');

timerForm.addEventListener('submit', handleStartTimer);

let sound = new Howl({
    src: ['sound.mp3']
});

function handleStartTimer(event) {
    event.preventDefault();
    let { duration } = event.target.elements;

    const timerDurationMills = duration.valueAsNumber;
    const startTime = new Date();

    if (timerDurationMills) {
        const timerInterval = setInterval(() => {
            const currTime = new Date();
            const millsFromStart = currTime.getTime() - startTime.getTime();
            
            if (millsFromStart < timerDurationMills) {
                const diffInSeconds = (timerDurationMills - millsFromStart) / 1000;

                let hours = Math.floor(diffInSeconds / 60 / 60 % 24);
                let minutes = Math.floor(diffInSeconds / 60 % 60);
                let seconds = Math.floor(diffInSeconds % 60);

                timerResult.innerHTML = `${hours}:${minutes}:${seconds}`;
            } else {
                sound.play();
                clearInterval(timerInterval);
            }
        }, 1000);

        document.querySelector('#stop-timer').addEventListener('click', () => {
            clearInterval(timerInterval);
        })
    } else {
        timerResult.innerHTML = formatError("Заполните время");
    }
}

const tabButtons = document.querySelectorAll('.tabs button');

tabButtons.forEach(button => {
    button.addEventListener('click', switchTab);
})

renderActiveTab();