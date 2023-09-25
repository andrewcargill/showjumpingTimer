let intervalId: number | null = null;
let startTime: number = 0;

const timerDisplay: HTMLDivElement | null = document.getElementById('timer') as HTMLDivElement | null;
const startButton: HTMLButtonElement | null = document.getElementById('startButton') as HTMLButtonElement | null;
const stopButton: HTMLButtonElement | null = document.getElementById('stopButton') as HTMLButtonElement | null;
const resetButton: HTMLButtonElement | null = document.getElementById('resetButton') as HTMLButtonElement | null;

function updateTimer() {
    if (timerDisplay !== null) {
        const currentTime: number = Date.now();
        const elapsedTime: number = currentTime - startTime;
        const minutes: number = Math.floor(elapsedTime / 60000);
        const seconds: number = Math.floor((elapsedTime % 60000) / 1000);
        const milliseconds: number = Math.floor((elapsedTime % 60000));
        const centiseconds = Math.floor((milliseconds % 1000) / 10);
        
        const display: string = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
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
    console.log('Reset Called!')
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
            console.log('stop button clicked')
            window.clearInterval(intervalId);
            intervalId = null;
        }
    });

    updateTimer(); // Initialize the timer display
}

if (resetButton !== null) {
    resetButton.addEventListener('click', resetTimer);
}
