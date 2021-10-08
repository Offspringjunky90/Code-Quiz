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
var holdInterval = 0;

begin.addEventListener("click", function () {
        if (hI === 0) {
            hI = setInterval(function () {
            secondsLeft--;
            countdown.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(hI);
                countdown.textContent = "Sorry, but your time is up! Let's see how you did!";
                allDone();
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
        var li = document.createElement("li");
        li.textContent = newItem;
        questionsDiv.appendChild(ul);
        ul.appendChild(li);
        li.style.cssText = "list-style: none; cursor: pointer";
        li.addEventListener("click", (compare));
    })
}

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var spawnDiv = document.createElement("div");
        spawnDiv.setAttribute("id", "spawnDiv");
        if (element.textContent == questions[questionPostition].answer) {
            score++;
            spawnDiv.textContent = "Correct!";
         } else {
                spawnDiv.textContent ="Wrong! The correct answer is: " + questions[questionPostition].answer;
            }
        }
    
    questionPostition++;
    if (questionPostition >= questions.length) {
        allDone();
        spawnDiv.textContent = "The End!" + " " + "Your score is " + score + "/" + questions.length + ". Your time was " + secondsLeft + " seconds.";
    } else {
        appear(questionPostition);
    }
    questionsDiv.appendChild(spawnDiv);
}

function stopTimer() {
    clearInterval(hI);
}

function allDone() {
    questionsDiv.innerHTML = "",
    stopTimer();

    var spawnh1 = document.createElement("h1");
    spawnh1.setAttribute("id", "spawnh1");
    spawnh1.textContent = "All Done!"

    questionsDiv.appendChild(spawnh1);

    var spawnP = document.createElement("p");
    spawnP.setAttribute("id", "spawnP");

    questionsDiv.appendChild(spawnP);

    var setInitials = document.createElement("label");
    setInitials.setAttribute("id", "setInitials");
    setInitials.textContent = "Please enter your initials: ";

    var spawnInput = document.createElement("input");
    spawnInput.setAttribute("id", "spawnLabel");
    spawnInput.setAttribute("id", "initials");
    spawnInput.textContent = "";

    var spawnSubmit = document.createElement("button");
    spawnSubmit.style.cssText = "cursor: pointer";
    spawnSubmit.setAttribute("type", "submit");
    spawnSubmit.setAttribute("id", "submit");
    spawnSubmit.textContent = "Submit";

    questionsDiv.appendChild(spawnSubmit);
    questionsDiv.appendChild(setInitials);
    questionsDiv.appendChild(spawnInput);

    spawnSubmit.addEventListener("click", function () {
        var initials = spawnInput.value;
        var timeRemaining = secondsLeft;
        if (initials === null) {
            alert("");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining,
            }
            localStorage.setItem("finalScore", JSON.stringify(finalScore));
            location.replace("./highscorepageindex.html");
        }
    });

}