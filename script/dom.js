// Game Object
const questionObj = document.querySelector('.game-content .question span');
const cardsObj = document.querySelector('.game-content .cards');
const playerInfo = document.querySelectorAll('.player-info span');

// Button Open Overlay LogReg
const btnOpenLog = document.querySelectorAll('.acc button')[0];
const btnOpenReg = document.querySelectorAll('.acc button')[1];

// Form Object
const formLog = document.querySelectorAll('.acc form')[0];
const formReg = document.querySelectorAll('.acc form')[1];

// Input InOverlay
const inputLog = document.querySelectorAll('.acc form#login input');
const inputReg = document.querySelectorAll('.acc form#register input');

// Button LogReg InOverlay
const btnLog = document.querySelectorAll('.acc form#login button')[0];
const btnCancelLog = document.querySelectorAll('.acc form#login button')[1];
const btnReg = document.querySelectorAll('.acc form#register button')[0];
const btnCancelReg = document.querySelectorAll('.acc form#register button')[1];

// Profile Overlay
const profileOverlay = document.querySelector('.acc .profile-overlay');

//Mode
const modeBtn = document.querySelector('header button[name="btnMode"]'); 

// Alert Box
const alertBox = document.querySelectorAll('.alert-box');


// Exports Break
export { questionObj, cardsObj, btnOpenLog, btnOpenReg, formLog, formReg, btnLog , btnCancelLog, btnReg , btnCancelReg, inputLog, inputReg, alertBox, profileOverlay, playerInfo, modeBtn };