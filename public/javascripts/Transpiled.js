var name;
var description;
var answer;

class Question {
    constructor(name, description, answer) {
        this.name = name;
        this.description = description;
        this.answer = answer;
    }
    // function setName(name) {
    //     name = this.name;
    // }
    // function setDescription(description) {
    //     description = this.description;
    // }
    // function setAnswer(answer) {
    //     answer = this.answer;
    // }
    // get getName() {
    //     return name;
    // }
    // get getDescription() {
    //     return description;
    // }
    // get getAnswer() {
    //     return answer;}
    // get inString() {
    //     return name+description+answer;
    // }
};

// const quiz =[];
// var score;

class Quiz {
    quiz = [];
    score;
    constructor(quiz,score) {
        this.quiz = quiz;
        this.score = 0;
      }
    addToQuiz(newQuestion) {
        quiz.push(newQuestion);
        return quiz;
    }
    // setQuiz(quiz) {
    //     this.quiz = quiz;
    // }
    // setScore(score) {
    //     this.score = score;
    // }
    runQuiz() {
        for(var i=0; i < this.quiz.length; i++) {
            console.log(this.quiz[i].name);
            console.log(this.quiz[i].description);
            const prompt=require("prompt-sync")({sigint:true}); 
            let curAnswer = prompt("Please write your answer: ");
            if (curAnswer == this.quiz[i].answer) {
                console.log("Correct!")
                this.score++;
            }
            else {
                console.log("Wrong, sorry!")
            }
        }
        console.log("Your score was " + this.score + " out of " + this.quiz.length);
        console.log("Well done!");
    }
}
    newQuiz = [];
    const q1 = new Question("Pantene", "is this good?", "no");
    const q2 = new Question("Head and Shoulders", "is this good?", "no");
    const q3 = new Question("Tresemme", "is this good?", "no");
    const q4 = new Question("Dove", "is this good?", "no");
    newQuiz.push(q1);
    newQuiz.push(q2);
    newQuiz.push(q3);
    newQuiz.push(q4);
    const theQuiz = new Quiz(newQuiz);
    theQuiz.runQuiz();