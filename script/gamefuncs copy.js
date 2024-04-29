import { questions, questionsVowels, questionsKLine, questionsSLine, questionsTLine, questionsNLine, questionsHLine, questionsMLine, questionsYLine, questionsRLine, questionsWLine, questionsIdkLine, answers, answersVowels, answersKLine, answersSLine, answersTLine, answersNLine, answersHLine, answersMLine, answersYLine, answersRLine, answersWLine, answersIdkLine } from "./data.js";
import { cardsObj } from "./dom.js";
import { currentQuestion, playerStage, playerLevel } from "./main.js";

// Imports Break


let randInt = Math.round(Math.random() *  100);
let randInt0 = Math.round(Math.random() *  100);

let showQuestion = (stage, level) => {
    if (stage == 1 && level == 1) {
        
        if (randInt <= 20) {
            return questionsVowels[0];
        }
        else if (randInt <= 40) {
            return questionsVowels[1];
        }
        else if (randInt <= 60) {
            return questionsVowels[2];
        }
        else if (randInt <= 80) {
            return questionsVowels[3];
        }
        else if (randInt <= 100) {
            return questionsVowels[4];
        }
        
    } else if (stage == 1 && level == 2) {
        if (randInt <= 20) {
            return questionsKLine[0];
        }
        else if (randInt <= 40) {
            return questionsKLine[1];
        }
        else if (randInt <= 60) {
            return questionsKLine[2];
        }
        else if (randInt <= 80) {
            return questionsKLine[3];
        }
        else if (randInt <= 100) {
            return questionsKLine[4];
        }
    } else if (stage == 1 && level == 3) {
        if (randInt <= 20) {
            return questionsSLine[0];
        }
        else if (randInt <= 40) {
            return questionsSLine[1];
        }
        else if (randInt <= 60) {
            return questionsSLine[2];
        }
        else if (randInt <= 80) {
            return questionsSLine[3];
        }
        else if (randInt <= 100) {
            return questionsSLine[4];
        }
    } else if (stage == 1 && level == 4) {
        if (randInt <= 20) {
            return questionsTLine[0];
        }
        else if (randInt <= 40) {
            return questionsTLine[1];
        }
        else if (randInt <= 60) {
            return questionsTLine[2];
        }
        else if (randInt <= 80) {
            return questionsTLine[3];
        }
        else if (randInt <= 100) {
            return questionsTLine[4];
        }
    } else if (stage == 1 && level == 5) {
        if (randInt <= 20) {
            return questionsNLine[0];
        }
        else if (randInt <= 40) {
            return questionsNLine[1];
        }
        else if (randInt <= 60) {
            return questionsNLine[2];
        }
        else if (randInt <= 80) {
            return questionsNLine[3];
        }
        else if (randInt <= 100) {
            return questionsNLine[4];
        }
    } else if (stage == 1 && level == 6) {
        if (randInt <= 20) {
            return questionsHLine[0];
        }
        else if (randInt <= 40) {
            return questionsHLine[1];
        }
        else if (randInt <= 60) {
            return questionsHLine[2];
        }
        else if (randInt <= 80) {
            return questionsHLine[3];
        }
        else if (randInt <= 100) {
            return questionsHLine[4];
        }
    } else if (stage == 1 && level == 7) {
        if (randInt <= 20) {
            return questionsMLine[0];
        }
        else if (randInt <= 40) {
            return questionsMLine[1];
        }
        else if (randInt <= 60) {
            return questionsMLine[2];
        }
        else if (randInt <= 80) {
            return questionsMLine[3];
        }
        else if (randInt <= 100) {
            return questionsMLine[4];
        }
    } else if (stage == 1 && level == 8) {
        if (randInt <= 33) {
            return questionsYLine[0];
        }
        else if (randInt <= 66) {
            return questionsYLine[1];
        }
        else if (randInt <= 100) {
            return questionsYLine[2];
        }
    } else if (stage == 1 && level == 9) {
        if (randInt <= 20) {
            return questionsRLine[0];
        }
        else if (randInt <= 40) {
            return questionsRLine[1];
        }
        else if (randInt <= 60) {
            return questionsRLine[2];
        }
        else if (randInt <= 80) {
            return questionsRLine[3];
        }
        else if (randInt <= 100) {
            return questionsRLine[4];
        }
    } else if (stage == 1 && level == 10) {
        if (randInt <= 50) {
            return questionsWLine[0];
        }
        else if (randInt <= 100) {
            return questionsWLine[1];
        }
    } else if (stage == 1 && level == 11) {
        if (randInt <= 100) {
            return questionsIdkLine[0];
        }
    }
    
};

let showAnswer = (stage, level) => {
    // Correct
    let getIndex = questionsVowels.indexOf(currentQuestion);
    let correctAnswer = answersVowels[getIndex];
    cardsObj.children[0].innerHTML = correctAnswer;
    console.log(correctAnswer)
    
    // Wrong
    let wrongAnswer;
    
    let randAnswer = () => {
        if (stage == 1 && level == 1) {
            
            if (randInt0 <= 20) {
                wrongAnswer = answersVowels[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersVowels[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersVowels[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersVowels[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersVowels[4];
            }
            
        } else if (stage == 1 && level == 2) {
            if (randInt0 <= 20) {
                wrongAnswer = answersKLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersKLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersKLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersKLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersKLine[4];
            }
        } else if (stage == 1 && level == 3) {
            if (randInt0 <= 20) {
                wrongAnswer = answersSLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersSLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersSLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersSLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersSLine[4];
            }
        } else if (stage == 1 && level == 4) {
            if (randInt0 <= 20) {
                wrongAnswer = answersTLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersTLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersTLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersTLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersTLine[4];
            }
        } else if (stage == 1 && level == 5) {
            if (randInt0 <= 20) {
                wrongAnswer = answersNLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersNLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersNLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersNLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersNLine[4];
            }
        } else if (stage == 1 && level == 6) {
            if (randInt0 <= 20) {
                wrongAnswer = answersHLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersHLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersHLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersHLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersHLine[4];
            }
        } else if (stage == 1 && level == 7) {
            if (randInt0 <= 20) {
                wrongAnswer = answersMLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersMLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersMLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersMLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersMLine[4];
            }
        } else if (stage == 1 && level == 8) {
            if (randInt0 <= 33) {
                wrongAnswer = answersYLine[0];
            }
            else if (randInt0 <= 66) {
                wrongAnswer = answersYLine[1];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersYLine[2];
            }
        } else if (stage == 1 && level == 9) {
            if (randInt0 <= 20) {
                wrongAnswer = answersRLine[0];
            }
            else if (randInt0 <= 40) {
                wrongAnswer = answersRLine[1];
            }
            else if (randInt0 <= 60) {
                wrongAnswer = answersRLine[2];
            }
            else if (randInt0 <= 80) {
                wrongAnswer = answersRLine[3];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersRLine[4];
            }
        } else if (stage == 1 && level == 10) {
            if (randInt0 <= 50) {
                wrongAnswer = answersWLine[0];
            }
            else if (randInt0 <= 100) {
                wrongAnswer = answersWLine[1];
            }
        } else if (stage == 1 && level == 11) {
            if (randInt0 <= 100) {
                wrongAnswer = answersIdkLine[0];
            }
        };
    };
    randAnswer();
    cardsObj.children[1].innerHTML = wrongAnswer;
};
let theAnswer = ()=> {
    showAnswer(playerStage, playerLevel)
}


// Exports Break
export { showQuestion, showAnswer, theAnswer, randInt0 };