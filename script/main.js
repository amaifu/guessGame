import { questions, questionsVowels, questionsKLine, questionsSLine, questionsTLine, questionsNLine, questionsHLine, questionsMLine, questionsYLine, questionsRLine, questionsWLine, questionsIdkLine, answers, answersVowels, answersKLine, answersSLine, answersTLine, answersNLine, answersHLine, answersMLine, answersYLine, answersRLine, answersWLine, answersIdkLine } from "./data.js";
import { result, showAnswer, showQuestion } from "./gamefuncs.js";
import { scaleDown, scaleUp } from "./stylefuncs.js";
import { questionObj, cardsObj, btnOpenLog, btnOpenReg, formLog, formReg, btnLog , btnCancelLog, btnReg , btnCancelReg, inputLog, inputReg, alertBox, profileOverlay, playerInfo, modeBtn } from "./dom.js";
import { Player } from "./object.js";
// Imports Break


console.log(questions, questionsVowels, questionsKLine, questionsSLine, questionsTLine, questionsNLine, questionsHLine, questionsMLine, questionsYLine, questionsRLine, questionsWLine, questionsIdkLine, answers, answersVowels, answersKLine, answersSLine, answersTLine, answersNLine, answersHLine, answersMLine, answersYLine, answersRLine, answersWLine, answersIdkLine);

//Player Data
let isLogin = false;
let guest = new Player('guest', 'guest', 'guest');
playerInfo[0].innerHTML = guest.name;
playerInfo[1].innerHTML = guest.stage;
playerInfo[2].innerHTML = guest.level;
playerInfo[3].innerHTML = guest.question;

// LogReg Open Overlays
btnOpenLog.addEventListener('click', ()=> {
    if (btnOpenLog.innerHTML == 'Login') {
        scaleUp(formLog);
    } else {
        scaleUp(profileOverlay);
        setTimeout(()=> {
            scaleDown(profileOverlay);
        }, 1000)
    }
})
btnOpenReg.addEventListener('click', ()=> {
    if (btnOpenReg.innerHTML == 'Register') {
        scaleUp(formReg);
    } else {
        scaleUp(alertBox[1]);
        alertBox[1].children[0].innerHTML = 'You just clicked logout button, are you sure?'
    }
})
// LogReg Close Overlays
btnCancelLog.addEventListener('click', ()=> {scaleDown(formLog);});
btnCancelReg.addEventListener('click', ()=> {scaleDown(formReg);});

// Register Acc
let playerId = 1;
btnReg.addEventListener('click', ()=> {

    if (inputReg[0].value.length < 1 && inputReg[1].value.length < 1 && inputReg[2].value.length < 1) {
        alertBox[0].children[0].innerHTML = 'Please fill all field!';
        alertBox[0].children[1].style.display = 'none';
        scaleUp(alertBox[0]);
        setTimeout(()=> {
            alertBox[0].children[1].style.display = 'block';
            scaleDown(alertBox[0]);
        }, 1000);
    } else {
        window['player' + playerId] = new Player(playerId, inputReg[0].value, inputReg[1].value, inputReg[2].value);
    
        playerId++;
        console.log(playerId);
    
        inputReg.forEach(e=>{
            e.value = '';
        })
    
        alertBox[0].children[0].innerHTML = 'Register Success, Please Login!';
        scaleUp(alertBox[0]);
    }
});

// Login Acc
btnLog.addEventListener('click', ()=> {

    if (inputLog[0].value.length < 1 && inputLog[1].value.length < 1) {
        alertBox[0].children[0].innerHTML = 'Please fill all field!';
        alertBox[0].children[1].style.display = 'none';
        scaleUp(alertBox[0]);
        setTimeout(()=> {
            alertBox[0].children[1].style.display = 'block';
            scaleDown(alertBox[0]);
        }, 1000);
    } else {
        for(let i=1;i<playerId;i++) {
            let username = 'player'+i+'.name';
            let password = 'player'+i+'.password';
            let stage = 'player'+i+'.stage';
            let level = 'player'+i+'.level';
            let question = 'player'+i+'.question';
            if (inputLog[0].value == eval(username) && inputLog[1].value == eval(password)) {
                alertBox[0].children[0].innerHTML = 'Login Success!';
                playerInfo[0].innerHTML = eval(username);
                playerInfo[1].innerHTML = eval(stage);
                playerInfo[2].innerHTML = eval(level);
                playerInfo[3].innerHTML = eval(question);
                scaleUp(alertBox[0]);
                inputLog.forEach(e=>{
                    e.value = '';
                })
                isLogin = true;
                return 0;
            }
        }
        alertBox[0].children[0].innerHTML = 'Player not Found or Your data is wrong!';
        scaleUp(alertBox[0]);
        inputLog.forEach(e=>{
            e.value = '';
        })
    }
});

// Mode
modeBtn.addEventListener('click', ()=> {
    if(modeBtn.innerHTML == 'CASUAL') {
        modeBtn.innerHTML = 'COMPE'
    } else {
        modeBtn.innerHTML = 'CASUAL'
    }
})

// Create Soal
questionObj.innerHTML = showQuestion(parseInt(playerInfo[1].innerHTML), parseInt(playerInfo[2].innerHTML));

// Show Answer
cardsObj.children[0].innerHTML = showAnswer()[0];
cardsObj.children[1].innerHTML = showAnswer()[1];

// Result
result();


// Alert Box
alertBox[0].children[1].addEventListener('click', ()=> {
    if (alertBox[0].children[0].innerHTML == 'Register Success, Please Login!') {
        scaleDown(alertBox[0]);
        scaleDown(formReg);
        scaleUp(formLog);
    } else if (alertBox[0].children[0].innerHTML == 'Login Success!') {
        scaleDown(alertBox[0]);
        scaleDown(formLog);
        btnOpenLog.innerHTML = 'Profile';
        btnOpenReg.innerHTML = 'Logout';
    } else if (alertBox[0].children[0].innerHTML == 'Player not Found or Your data is wrong!') {
        scaleDown(alertBox[0]);
        scaleUp(formLog);
    }
})

alertBox[1].children[1].addEventListener('click', ()=> {
    scaleDown(alertBox[1]);
    btnOpenLog.innerHTML = 'Login';
    btnOpenReg.innerHTML = 'Register';
    alertBox[0].children[0].innerHTML = "You're already logout!";
    alertBox[0].children[1].style.display = 'none';
    scaleUp(alertBox[0]);
    setTimeout(()=> {
        alertBox[0].children[1].style.display = 'block';
        scaleDown(alertBox[0]);
    }, 1000);
})
alertBox[1].children[2].addEventListener('click', ()=> {
    scaleDown(alertBox[1]);
})


// Export Break