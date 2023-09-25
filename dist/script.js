let intervalId = null;
let startTime = 0;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
function updateTimer() {
    if (timerDisplay !== null) {
        const currentTime = Date.now();
        console.log(currentTime);
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        console.log(minutes);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        console.log(seconds);
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerDisplay.textContent = display;
    }
}
if (startButton !== null && stopButton !== null && timerDisplay !== null) {
    startButton.addEventListener('click', () => {
        if (intervalId === null) {
            startTime = Date.now(); // Set startTime to the current time
            intervalId = window.setInterval(updateTimer, 1000);
        }
    });
    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            console.log('stop button clicked');
            window.clearInterval(intervalId);
            intervalId = null;
        }
    });
    updateTimer(); // Initialize the timer display
}
const resetButton = document.getElementById('resetButton');
function resetTimer() {
    // Clear the interval and reset timer values
    if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
    }
    startTime = Date.now();
    console.log('Reset Called!');
    updateTimer(); // Update the timer display
}
// Event listener for the Reset button
if (resetButton !== null) {
    resetButton.addEventListener('click', resetTimer);
}
