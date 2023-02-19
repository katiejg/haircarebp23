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
function runQuiz(questnum) {
        let label = document.createElement("label");
        let box = document.createElement("input");
        box.setAttribute("type", "text");
        box.setAttribute("id", "q1");
        box.setAttribute("name", "ans");
        let button = document.createElement("input");
        button.setAttribute("type", "submit");
        console.log("HTML setup!");        
        let nameNode = document.createTextNode(questnum.name + ", " + questnum.description + " ");
        // let descNode = document.createTextNode();
        console.log(nameNode);
        label.appendChild(nameNode);
        form.appendChild(label);
        form.appendChild(box);
        form.appendChild(button);
    }
    quiz = [];
    const q1 = new Question("Pantene", "is this good?", "no");
    const q2 = new Question("Head and Shoulders", "is this good?", "no");
    const q3 = new Question("Tresemme", "is this good?", "no");
    const q4 = new Question("Dove", "is this good?", "no");
    const form = document.getElementById("questionnaire");

runQuiz(quiz[i]);
