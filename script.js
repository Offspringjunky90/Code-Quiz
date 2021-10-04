var questions = [
    {
        question: "HTML stands for what?",
        choices: ["Hypertrophic Management Language", "Hyperberic Tertiarty Logrithm", "Hypertext Markup Language", "Hyperresonant Marginal Logrithm"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        choices: ["Break /", "Br  /Br", "lb /", "Br /"],
        answer: "Br  /Br"
    },
    {
        question: "What does CSS stand for?",
        choices: ["Computer Style Sheets", "Control Style Sheets", "Creative Style Sheets", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "How do you insert a comment in a CSS file?",
        choices: ["*This is a comment*", "/*This is a comment*/", "//This is a comment//", "/This is a comment"],
        answer: "/*This is a comment*/"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<scripting>", "<javascript>", "<js>"],
        answer: "<script>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')"],
        answer: "alert('Hello World')"
    }
];


var score = 0;
var questionPostition = 0;
var countdown = document.querySelector("#countdown");
var begin = document.querySelector("#begin");
var questionsDiv = document.querySelector(".questionsDiv");
var ul = document.createElement("ul");
var hI = 0;
var secondsLeft = 60;

begin.addEventListener("click", function () {
        if (hI === 0) {
            hI = setInterval(function () {
            secondsLeft--;
            countdown.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(hI);
                countdown.textContent = "Sorry, but your time is up! Let's see how you did!";
            }
        }, 1000);
    }
    appear(questionPostition);
});

function appear(questionPostition) {
    questionsDiv.innerHTML = "";
    ul.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionPostition].question;
        var userChoices = questions[questionPostition].choices;
        questionsDiv.textContent = userQuestion;
    }

    userChoices.forEach(function(newItem) {
        var lI = document.createElement("li")
        lI.textContent = newItem;
        questionsDiv.appendChild(ul);
        ul.appendChild(lI);
        lI.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        
    }
}