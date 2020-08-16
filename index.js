//need to store initials and score in local storage and be able to clear it


// prevent default

// globl variables
var quizDiv = document.getElementById("quiz");
var quizAnswer1 = document.getElementById("answer1");
var quizAnswer2 = document.getElementById("answer2");
var quizAnswer3 = document.getElementById("answer3");
var quizAnswer4 = document.getElementById("answer4");
var jumbotron = document.getElementById("quizstart");
var saveScore = document.getElementById("saveScore");
var currentScore = document.getElementById("currentScore");
var clearScores = document.getElementById("clearScores");
var pastScores = document.getElementById("pastScores");
var questionsArray = [
    {question: "Commonly used data types DO NOT include:",
     answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"]
    },
    {question: "The condition in an if / else statement is enclosed within _____.",
     answers: ["1. quotes", "2. parentheses", "3. curly brackets", "4. square brackets"]
    },
    {question: "Arrays in JavaScript can be used to store _____.",
     answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
    },
    {question: "String values must be enclosed within _____ when being assigned to variables.",
     answers: ["1. quotes", "2. curly brackets", "3. commas", "4. parentheses"]
    },
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
     answers: ["1. JavaScript", "2. terminal/bash", "3. console.log", "4. for loops"]
    }
];
var correctAnswers = ["3. alerts","2. parentheses", "4. all of the above", "1. quotes", "3. console.log"];
var score = 0;
var displayedQuestion = 0;


//hides div that contains the questions on the home page
function quizHide (){
    quizDiv.style.display = "none";
}
quizHide();

// makes jumbotron element disappear when quiz is started
document.getElementById("startButton").addEventListener("click", function (){
    jumbotron.style.display = "none";
    timer ();
    quizQuestions();
});

// sets the start time
var startTime = 90;
var interval = setInterval(timer, 1000);
// this is the timer function
function timer() {
    startTime--;
    document.getElementById("timerElement").innerHTML = "Time: " + startTime;
    if (startTime === 0 || displayedQuestion === 6) {
        clearInterval(interval);
        quizFinish();
    }
}

// makes quiz questions appear
function quizQuestions (){
    //makes quiz appear
    quizDiv.style.display = "block";
    
    //sets text of the question
    var qHeading = document.getElementById("questionHeader");
    qHeading.innerHTML = questionsArray[displayedQuestion].question;

    //sets text of answer choices
    quizAnswer1.innerHTML = questionsArray[displayedQuestion].answers[0];
    quizAnswer2.innerHTML = questionsArray[displayedQuestion].answers[1];
    quizAnswer3.innerHTML = questionsArray[displayedQuestion].answers[2];
    quizAnswer4.innerHTML = questionsArray[displayedQuestion].answers[3];
    
    if (displayedQuestion === 5){
        quizFinish();
    }
}

//creates answer choice feedback
var result = document.createElement("p");
document.getElementById("quiz").appendChild(result);

function correct (){
    result.innerHTML = "Correct answer!";
    score += 10; 
    displayedQuestion++;
    quizQuestions();
}    

function wrong (){
    result.innerHTML = "Wrong answer!";
    score -= 10;
    if (startTime < 0) {
        startTime = 0;
        clearInterval(interval);
    } else {
        startTime -= 10;
    }
}

function quizFinish (){
    quizHide ();
    window.location.href="./highscore.html";
    var yourScore = document.createElement("p");
    currentScore.appendChild(yourScore);
    yourScore.innerHTML = score;
}

//makes answer buttons functional
quizAnswer1.addEventListener("click", function (){
    if (displayedQuestion === 3){
        correct();
    } else {
        wrong();
    }
});
quizAnswer2.addEventListener("click", function (){
   if (displayedQuestion === 1){
        correct();
    } else {
        wrong();
    }
});
quizAnswer3.addEventListener("click", function (){
   if (displayedQuestion === 0){
        correct();
    } else if (displayedQuestion === 4){
        score += 10;
        quizFinish();
    } else {
        wrong();
    }
});
quizAnswer4.addEventListener("click", function (){
   if (displayedQuestion === 2){
        correct();
    } else {
        wrong();
    }
});
