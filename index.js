//need to store initials and score in local storage and be able to clear it


// prevent default

// globl variables
let correct = [];
let quizDiv = document.getElementById("quiz");
let jumbotron = document.getElementById("quizstart");
let questionsArray = [
    {question1: "Commonly used data types DO NOT include:",
     answers1: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
     correct: "3. alerts"},
    {question2: "The condition in an if / else statement is enclosed within _____.",
     answers2: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
     correct: "3. parentheses"},
    {question3: "Arrays in JavaScript can be used to store _____.",
     answers3: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
     correct: "4. all of the above"},
    {question4: "String values must be enclosed within _____ when being assigned to variables.",
     answers4: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
     correct: "3. quotes"},
    {question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
     answers5: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
     correct: "4. console.log"},
]


//hides div that contains the questions on the home page
function quizHide (){
    quizDiv.style.display = "none"
}
quizHide();
// makes jumbotron element disappear when quiz is started
document.getElementById("startButton").addEventListener("click", function (){
    jumbotron.style.display = "none";
    window.setInterval(timer, 1000)
    quizQuestions();
})

// sets the start time
var startTime = 90;

// this is the timer function
function timer() {
    startTime--;
    document.getElementById("timerElement").innerHTML = startTime;
}

// makes quiz questions appear
function quizQuestions (){
    quizDiv.style.display = "block";

    for (var i = 0; i < questionsArray.length; i++){
        var qHeading = document.getElementById("questionHeader");
        qHeading.innerHTML = questionsArray[i][i];

    }
}

// sets what happens when an answer is wrong



// sets what happens when an answer is right

