//need to store initials and score in local storage and be able to clear it


// prevent default

// globl variables
let correct = [];

// makes jumbotron element disappear when quiz is started
var jumbotron = document.getElementById("quizstart");
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
    for (var i = 0; i < questionsArray.length; i++){
        var qHeading = document.getElementById("questionHeader");
        qHeading.textContent = "questionsArray[i][i]";

        // var qHeading = document.createElement("div");
        // qHeading.innerHTML = "questionsArray[i][i]";
        // document.getElementById("questionel").appendChild(qHeading);
    }
}

// sets what happens when an answer is wrong



// sets what happens when an answer is right

