let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 1000);
        toggleButtons(true);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        toggleButtons(false);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateTimerDisplay();
    toggleButtons(false);
}

function updateTimer() {
    const now = Date.now();
    elapsedTime = now - startTime;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 60000) % 60;
    const hours = Math.floor(elapsedTime / 3600000);

    const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timerDisplay.textContent = display;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function toggleButtons(running) {
    startBtn.disabled = running;
    pauseBtn.disabled = !running;
    resetBtn.disabled = running;
}

