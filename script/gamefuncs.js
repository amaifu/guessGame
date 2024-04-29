import {  questions, answers, answerList, questionList } from "./data.js";
import { cardsObj, questionObj, playerInfo, alertBox, modeBtn } from "./dom.js";
import { Player } from "./object.js";
import { scaleDown, scaleUp, tempAlertBox } from "./stylefuncs.js";

// Imports Break

// Get Random number by total length of question or answer arrays
let randInt0;
let randInt;
let indexTotal;
let totalIndex = (stage, level) => { 
    for(let i=0;i<questionList.length;i++) {
        if (stage == 1 && level == i + 1) {
            indexTotal = questionList[i].length - 1;
        }
    }
    randInt0 = Math.round(Math.random() *  indexTotal);
    randInt = Math.round(Math.random() *  indexTotal);

    for(let j=0;randInt0 == randInt;j++) {
        randInt0 = Math.round(Math.random() *  indexTotal);
    }

    if (randInt >= questionList[indexTotal].length) {
        randInt -= 1;
    } else if (randInt < 0) {
        randInt += 1;
    };
    console.log(randInt);
    return randInt;
}; 

let globalStage = 0;
let globalLevel = 0;
let question = '';
let showQuestion = (stage, level) => {
    globalStage = stage;
    globalLevel = level;
    for(let i=0;i<questionList.length;i++) {
        if (stage == 1 && level == i + 1) {
            question = questionList[i][totalIndex(stage, level)];
            return question;
        }
    }
};

let randInt1 = Math.round(Math.random() * 100);
let showAnswer = () => {
    let correctAnswer = ()=> {
        return answers[questions.indexOf(question)];
    }
    let wrongAnswer = ()=> {
        for(let i=0;i<answerList.length;i++) {
            if (globalStage == 1 && globalLevel == i + 1) {
                return answerList[i][randInt0];
            }
        }
    }
    console.log(randInt1);
    if (randInt1 <= 50) {
        return [wrongAnswer(), correctAnswer()];
    } else {
        return [correctAnswer(), wrongAnswer()];
    }
};

// Shuffle RandInt
let shuffleRandInt1 = ()=> {
    randInt1 = Math.round(Math.random() * 100);
}

// Player Stats Increments
let QStatIncrement = ()=> {
    if (playerInfo[0].innerHTML == 'guest' && resultBool == true) {
        let currentQ = parseInt(playerInfo[3].innerHTML);
        currentQ++;
        playerInfo[3].innerHTML = currentQ;
    }
};
let LStatIncrement = ()=> {
    if (playerInfo[0].innerHTML == 'guest' && playerInfo[3].innerHTML > 10) {
        let currentL = parseInt(playerInfo[2].innerHTML);
        currentL++;
        playerInfo[2].innerHTML = currentL;
        playerInfo[3].innerHTML = 1;
        questionObj.innerHTML = showQuestion(parseInt(playerInfo[1].innerHTML), parseInt(playerInfo[2].innerHTML));
        cardsObj.children[0].innerHTML = showAnswer()[0];
        cardsObj.children[1].innerHTML = showAnswer()[1];
    }
}

let playerChancesRunOut = ()=> {
    if (playerChance < 0) {
        tempAlertBox(0, 'You Lose!, your stats will be reset!')
        playerInfo[1].innerHTML = '1';
        playerInfo[2].innerHTML = '1';
        playerInfo[3].innerHTML = '1';
        playerChance = 3
        questionObj.innerHTML = showQuestion(parseInt(playerInfo[1].innerHTML), parseInt(playerInfo[2].innerHTML));
        cardsObj.children[0].innerHTML = showAnswer()[0];
        cardsObj.children[1].innerHTML = showAnswer()[1];
    }
}

// Result Win or Lose
let cardArr = Array.from(cardsObj.children);
let resultBool = false;
let playerChance = 3;
let result = ()=> {
    cardArr.forEach(card => {
        let judge = playerAnswer => {
            if (questions.indexOf(question) == answers.indexOf(playerAnswer)) {
                console.log('winn');
                resultBool = true;
            } else {
                console.log('losee');
                resultBool = false;
            };
        };
        card.addEventListener('click', ()=> {
            judge(card.innerHTML);
            if (resultBool == true) {
                randInt = Math.round(Math.random() *  indexTotal);
                questionObj.innerHTML = showQuestion(globalStage,globalLevel);
                cardsObj.children[0].innerHTML = showAnswer()[0];
                cardsObj.children[1].innerHTML = showAnswer()[1];
                shuffleRandInt1();
                QStatIncrement();
                LStatIncrement();
            } else {
                if(modeBtn.innerHTML == 'CASUAL') {
                    alertBox[0].innerHTML = "Wrong Answer, Let's choose correct one"
                    scaleUp(alertBox[0]);
                    setTimeout(()=> {
                        scaleDown(alertBox[0]);
                    }, 1500);
                } 
                else {
                    playerChance--;
                    tempAlertBox(0, 'Wrong Answer, your chance: ' + playerChance +  ' left');
                    playerChancesRunOut();
                }
            }
        })
    });
}

// Exports Break
export { showQuestion, showAnswer, result };