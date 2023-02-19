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
    get getName() {
        return this.name;
    }
    get getDescription() {
        return this.description;
    }
    get getAnswer() {
        return this.answer;}
    get inString() {
        return name+description+answer;
    }
};

class Quiz {
    quiz = [];
    score;
    constructor(quiz, score) {
        this.quiz = quiz;
        this.score = 0;
      }
    addToQuiz(newQuestion) {
        quiz.push(newQuestion);
        return quiz;
    }
    runQuiz() {
        for(let i=0; i < this.quiz.length(); i++) {
            println(quiz[i].getName());
            println(quiz[i].getDescription());
            var curAnswer = prompt("Please write your answer")
            if (curAnswer == quiz[i].getAnswer()) {
                println("Correct!")
                score++;
            }
            else {
                println("Wrong, sorry!")
            }
        }
        println("Your score was " + score + " out of " + quiz.size());
        println("Well done!")
    }
    setQuiz(quiz) {this.quiz = quiz;}
    setScore(score) {
        this.score = score;
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
