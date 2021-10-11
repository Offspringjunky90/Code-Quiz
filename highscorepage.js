function seeHighScores () {
    var seeHS = JSON.parse(localStorage.getItem("finalScore"));
    document.querySelector("p").textContent = seeHS.initials + ": " + seeHS.score
    }

seeHighScores ();

var tryAgain = document.querySelector("#tryAgain");

tryAgain.addEventListener("click", function () {
    window.location.replace("./index.html")
});