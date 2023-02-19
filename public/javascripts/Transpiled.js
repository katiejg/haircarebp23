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
            let label = document.createElement("label");
            let box = document.createElement("input");
            box.setAttribute("type", "text");
            box.setAttribute("id", "q1");
            box.setAttribute("name", "ans");
            let button = document.createElement("input");
            button.setAttribute("type", "submit");
            console.log("HTML setup!");        
            let nameNode = document.createTextNode(this.quiz[i].name);
            let descNode = document.createTextNode(this.quiz[i].description);
            console.log(nameNode);
            label.innerHTML = nameNode;
            // const prompt=require("prompt-sync")({sigint:true}); 
            // let curAnswer = prompt("Please write your answer: ");
            // if (curAnswer == this.quiz[i].answer) {
            //     console.log("Correct!");
            //     this.score++;
            // }
            // else {
            //     console.log("Wrong, sorry!");
            // }
            form.appendChild(label);
            form.appendChild(box);
            form.appendChild(button);
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
    const form = document.getElementById("questionnaire");
    theQuiz.runQuiz();

