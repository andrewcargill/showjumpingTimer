let intervalId = null;
let startTime = 0;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
function updateTimer() {
    if (timerDisplay !== null) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds = Math.floor((elapsedTime % 60000));
        const centiseconds = Math.floor((milliseconds % 1000) / 10);
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
        timerDisplay.textContent = display;
    }
}
function resetTimer() {
    // Clear the interval and reset timer values
    if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
    }
    startTime = Date.now();
    updateTimer(); // Update the timer display
}
if (startButton !== null && stopButton !== null && timerDisplay !== null) {
    startButton.addEventListener('click', () => {
        if (intervalId === null) {
            startTime = Date.now(); // Set startTime to the current time
            intervalId = window.setInterval(updateTimer, 10);
        }
    });
    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
        }
    });
}
if (resetButton !== null) {
    resetButton.addEventListener('click', resetTimer);
}
