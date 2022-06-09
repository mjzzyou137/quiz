import questions from '../data/questions.json' assert { type: 'json' }
import { MultipleChoice } from '../models/multiple-choice.js'
import { FillInBlank } from '../models/fill-in-blank.js'

const MULTIPLE_CHOICE = 1;
const FILL_IN_BLANK = 2;

const getEle = id => document.getElementById(id)

const questionInstances = questions.map(question => {
    // if (question.questionType === MULTIPLE_CHOICE) {
    //     return new MultipleChoice(question);
    // } else if (question.questionType === FILL_IN_BLANK) {
    //     return new FillInBlank(question);
    // }

    // return null;

    return question.questionType === MULTIPLE_CHOICE ? new MultipleChoice(question) : new FillInBlank(question)
});

const quizListContent = questionInstances.reduce((total, current) => {
    total += current.render()

    return total;
}, ``)

getEle("quizList").innerHTML = quizListContent;

getEle("result").onclick = () => {
    let correct = 0;
    let incorrect = 0

    questionInstances.forEach((question) => {
        const isExact = question.getExact();

        if (isExact) {
            correct += 1
        } else {
            incorrect += 1;
        }

        getEle("correct").innerHTML = correct;
        getEle("incorrect").innerHTML = incorrect;
        getEle("score").innerHTML = correct * 10 / questions.length;
    })
}