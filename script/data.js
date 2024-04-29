// Questions
const questions = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'ye', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'wo', 'n'];

const answers = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];

const questionsVowels = questions.slice(0, 5);
const questionsKLine = questions.slice(5, 10);
const questionsSLine = questions.slice(10, 15);
const questionsTLine = questions.slice(15, 20);
const questionsNLine = questions.slice(20, 25);
const questionsHLine = questions.slice(25, 30);
const questionsMLine = questions.slice(30, 35);
const questionsYLine = questions.slice(35, 38);
const questionsRLine = questions.slice(38, 43);
const questionsWLine = questions.slice(43, 45);
const questionsIdkLine = questions.slice(45, 46);

const answersVowels = answers.slice(0, 5);
const answersKLine = answers.slice(5, 10);
const answersSLine = answers.slice(10, 15);
const answersTLine = answers.slice(15, 20);
const answersNLine = answers.slice(20, 25);
const answersHLine = answers.slice(25, 30);
const answersMLine = answers.slice(30, 35);
const answersYLine = answers.slice(35, 38);
const answersRLine = answers.slice(38, 43);
const answersWLine = answers.slice(43, 45);
const answersIdkLine = answers.slice(45, 46);

let questionList = [questionsVowels, questionsKLine, questionsSLine, questionsTLine, questionsNLine, questionsHLine, questionsMLine, questionsYLine, questionsRLine, questionsWLine, questionsIdkLine];

let answerList = [answersVowels, answersKLine, answersSLine, answersTLine, answersNLine, answersHLine, answersMLine, answersYLine, answersRLine, answersWLine, answersIdkLine];

// Player Info

// Exports Break
export{ questions, questionsVowels, questionsKLine, questionsSLine, questionsTLine, questionsNLine, questionsHLine, questionsMLine, questionsYLine, questionsRLine, questionsWLine, questionsIdkLine, answers, answersVowels, answersKLine, answersSLine, answersTLine, answersNLine, answersHLine, answersMLine, answersYLine, answersRLine, answersWLine, answersIdkLine, questionList, answerList };