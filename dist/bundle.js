/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("let intervalId = null;\nlet startTime = 0;\nconst timerDisplay = document.getElementById('timer');\nconst startButton = document.getElementById('startButton');\nconst stopButton = document.getElementById('stopButton');\nconst resetButton = document.getElementById('resetButton');\nfunction updateTimer() {\n    if (timerDisplay !== null) {\n        const currentTime = Date.now();\n        const elapsedTime = currentTime - startTime;\n        const minutes = Math.floor(elapsedTime / 60000);\n        const seconds = Math.floor((elapsedTime % 60000) / 1000);\n        const milliseconds = Math.floor((elapsedTime % 60000));\n        const centiseconds = Math.floor((milliseconds % 1000) / 10);\n        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;\n        timerDisplay.textContent = display;\n    }\n}\nfunction resetTimer() {\n    // Clear the interval and reset timer values\n    if (intervalId !== null) {\n        window.clearInterval(intervalId);\n        intervalId = null;\n    }\n    startTime = Date.now();\n    updateTimer(); // Update the timer display\n}\nif (startButton !== null && stopButton !== null && timerDisplay !== null) {\n    startButton.addEventListener('click', () => {\n        if (intervalId === null) {\n            startTime = Date.now(); // Set startTime to the current time\n            intervalId = window.setInterval(updateTimer, 10);\n        }\n    });\n    stopButton.addEventListener('click', () => {\n        if (intervalId !== null) {\n            window.clearInterval(intervalId);\n            intervalId = null;\n        }\n    });\n}\nif (resetButton !== null) {\n    resetButton.addEventListener('click', resetTimer);\n}\n\n\n//# sourceURL=webpack://showjumpingtimer/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;