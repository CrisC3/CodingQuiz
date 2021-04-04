// Variables of DOM queries
var mainScreen = document.getElementById("main-start-section");
var countdownTimer = document.getElementById("countdown");
var startQuizBtn = document.getElementById("start-btn");
var quizEl = document.getElementById("quiz");
var timeLeftEl = document.getElementById("countdown-left");
var quizQuestionTitleEl = document.getElementById("quiz-question");
var quizQuestionChoicesEl = document.getElementById("question-choices");
var notificationEl = document.getElementById("notification");
var quizEndEl = document.getElementById("finish");
var initialEl = document.getElementById("initial");
var saveScoreBtn = document.getElementById("save-score");
var scoresListEl = document.getElementById("scores");
var viewScoreBtn = document.getElementById("scores-btn");
var viewScoreList = document.getElementById("scores-list");
var returnToQuizBtn = document.getElementById("go-back-btn");
var clearScoresBtn = document.getElementById("clear-score-btn");

// Set variables manually
var timePenaltySecs = 5;
var timePerQuestionSecs = 10;

// Variables depended on functions
var availableQuestions  = getAllQuestions();

// Variables set later in functions
var timeGiven;
var quizIndex;
var timer;
var scoresCleared;

// Run when site is loaded
function onLoad() {

    // Variable to get from local storage
    var codingScore = JSON.parse(window.localStorage.getItem("codingScores"));    

    // Check if the codingScore exists in the browser local storage
    if(scoresCleared == true) {
        console.log("Scores were cleared out");
        scoresCleared = false;
    }
    else if(codingScore == null) {
        // codingScore does not exists, therefore, hide the View highscores button
        console.log("The local storage key is not found, hiding the view highscores button");
        viewScoreBtn.classList.add("hide");
    }
    else {
        // codingScore exists, show View highscores button
        viewScoreBtn.classList.remove("hide");
    }
}

function Quiz() {

    // Sets the time allow to answer, which is based on available questions, and allow seconds per question
    timeGiven = availableQuestions * timePerQuestionSecs;
    
    // Calls the resetQuiz function, to reset all answered [quiz.question]
    resetQuiz();

    // Sets the initial main screen text to hide
    mainScreen.setAttribute("class", "hide");

    // Removes the class hide from the timer, after start button is clicked
    countdownTimer.classList.remove("hide");

    // Removes the class from the quiz div section
    quizEl.removeAttribute("class");

    // Runs the countdown every second
    console.log("Countdown timer: " + timeGiven);
    timer = setInterval(countdown, 1000);

    // Sets the total time given to complete all the questions
    timeLeftEl.textContent = timeGiven;

    // Called the question() function
    question();
}

function question() {

    // Local variables
    var continueLoop = true;
    var quizQuestion;
    
    // While loop to randomize the questions
    while (continueLoop) {

        quizIndex = Math.floor(Math.random() * (availableQuestions - 0) + 0);
        quizQuestion = quiz[quizIndex];

        if(quiz[quizIndex].answered == false) {
            quizQuestionTitleEl.textContent = quizQuestion.question;
            quizQuestion.answered = true;
            continueLoop = false;
        }
    }

    // Clears out answer choices before adding to the element
    quizQuestionChoicesEl.innerHTML = "";

    // Adds class and value to the button choices elements
    for(var i = 0; i < quizQuestion.choices.length; i++) {
        var choices = document.createElement("button");

        // Setting class to the button
        choices.setAttribute("class", "button");

        // Setting value based on the answer choices to the button
        choices.setAttribute("value", quizQuestion.choices[i]);
        choices.textContent = quizQuestion.choices[i];

        // Event listener for when the user clicks on any of the answer choices
        choices.onclick = checkAnswer;

        // Adds all the available answer choices to the div element
        quizQuestionChoicesEl.append(choices);
    }

    
}

// Function to return all enable questions (quiz.answered = false)
function getAllQuestions() {

    // Local variables
    var numberOfQuestions = quiz.length;
    var allQuestionsNotAnswered = 0;
    
    // Goes thru all the questions, to find all the questions the user still has not done
    for(var i = 0; i < numberOfQuestions; i++) {
        if(quiz[i].showQuestion == true) {
            allQuestionsNotAnswered += 1;
        }
    }

    // Returns the value to the original function call
    return allQuestionsNotAnswered;
}

// After user finishes quiz, if they click start again, resets all quiz.answered to false.
function resetQuiz() {

    // Local variables
    var getAllQuestions = quiz.length;

    // For loop to set all quiz.ShowQuestion which are TRUE, to change
    // all the quiz.Answered equal FALSE, to ask the user
    for(var i = 0; i < getAllQuestions; i++) {
        if(quiz[i].showQuestion == true) {
            quiz[i].answered = false;
        }
    }

}

// Check function, to validate if the answer choice clicked on, is the correct one
function checkAnswer() {
    
    // Local variables
    var localTimePenalty = (timePenaltySecs > 2) ? (timePenaltySecs - 1) : timePenaltySecs;
    var notificationMsg = document.createElement("h2");
    var messageText = notificationEl.textContent;
    var countQuestionsLeft = 0;

    // Clears out the [div id="notification"] container
    notificationEl.innerHTML = "";

    // Adds the class attribute
    notificationEl.setAttribute("class", "notification");
    
    // Checks if the button value matches the question answer
    if (this.value !== quiz[quizIndex].answer) {
        
        // Wrong answer penalization by X seconds
        console.log(timePenaltySecs + " second(s) penalty");
        timeGiven -= localTimePenalty;

        // Notify user the answer choice was wrong
        messageText = "Sorry, 😔 wrong answer! ";
    }
    else {

        // Notify user the answer choice was right
        messageText = "Great, 😄 you got the answer correct! ";
    }

    // Setting the message text, based on the IF logic
    notificationMsg.innerHTML = messageText;

    // Adding the message to the element
    notificationEl.append(notificationMsg);
    
    // Checks how many questions are left to ask
    for(var i = 0; i < availableQuestions; i++) {

        if(quiz[i].answered == false) {
            countQuestionsLeft++;
        }
    }
    
    // Waits to add hide class to the answer notification element
    setTimeout(function() {notificationEl.classList.add("hide");}, 1000);

    // If the questions left is 0, go to end quiz. Else, go to next question
    if(countQuestionsLeft <= 0) {
        
        // Re-insert hide class into the quiz div.
        quizEl.classList.add("hide");

        // Timeout before running into the next function
        setTimeout(function() { endQuiz();}, 1200);
    }
    else {
        
        // Clears out quiz question and choices
        quizQuestionTitleEl.innerHTML = "";
        quizQuestionChoicesEl.innerHTML = "";

        // Timeout before running into the next function
        setTimeout(function() { question();}, 1200);
        
    }
}

// Decreases the timer by 1 second
function countdown() {
    
    // If, check the time given to the user has reach 0
    if(timeGiven > 0) {
        
        // Reduces the time given by 1
        timeGiven--;

        // Updates the time given on the timer element
        timeLeftEl.textContent = timeGiven;
    }
    else {

        // Sets the time given to 0, if less than 0
        timeGiven = 0;

        // If the timer reaches 0, terminate the quiz
        endQuiz();
    }
}

// Function after quiz ends
function endQuiz() {
    
    // Stops timer
    clearInterval(timer);

    // Local variables
    var finalScoreEl = document.getElementById("score");

    // Gets the stop time given, and adds it to the final score element
    finalScoreEl.textContent = timeGiven;

    // Checks if the stop time give is greater than 0. If the value is greater then 0
    // Shows the user to add their initials, if they wish to
    if(finalScoreEl.innerText > 0) {
        countdownTimer.classList.add("hide");
        quizEl.classList.add("hide");
        quizEndEl.classList.add("finish");
        quizEndEl.classList.remove("hide");
    }
    else {

        // If the user does not a score higher than 0

        // Hides the countdown timer
        countdownTimer.classList.add("hide");
        
        // Hides the quiz section element
        quizEl.classList.add("hide");

        // Calls the return to main function
        returnToMain();
    }
    
}


// Function to save all scores
function saveScores() {

    // Set local variables
    var userInitials = initialEl.value.trim();
    var initialEntered = false;

    // Check if the user entered their initials
    if(userInitials != "") {
        
        // User entered their initials

        var codingScore = JSON.parse(window.localStorage.getItem("codingScores")) || [];
        var userScore = { name: userInitials, time: timeGiven };
        
        // Adds the JSON score format to the local storage variable
        codingScore.push(userScore);
        
        // Adds the key and stringify to the local storage
        localStorage.setItem("codingScores", JSON.stringify(codingScore));
    }

    // Adds the hide class to the questions divs
    quizEndEl.classList.add("hide");

    // Clears out the input textbox after getting a value
    initialEl.value = "";

    // Check if initials were entered and they clicked on the save button
    if((userInitials != "") && (this.id == saveScoreBtn.id)) {
        // Calls the display score function
        displayScores();
    }
    else {
        // Calls the main screen function
        returnToMain();
    }
}

// Displays all scores saved in local storage function
function displayScores() {

    // Local variable
    var getScores = JSON.parse(window.localStorage.getItem("codingScores"));
    
    // Clears out the scores list, before adding
    viewScoreList.innerHTML = "";

    // Hides the main screen
    mainScreen.setAttribute("class", "hide");

    // Removes the hide class from the scores element
    scoresListEl.classList.remove("hide");

    // Sort JSON data by the time key
    getScores.sort(function (a, b) {
        return b.time - a.time;
    });

    // For loop, to add the initials and time on the element
    for(var i = 0; i < getScores.length; i++) {
        
        var listItemsEl = document.createElement("li");
        var liHeading = document.createElement("h2");
        
        listItemsEl.textContent = getScores[i].name + " ~ " + getScores[i].time;
        
        liHeading.append(listItemsEl);
        viewScoreList.append(liHeading);
    }
}

// Return to main screen function
function returnToMain() {

    // Hides the scores list
    scoresListEl.setAttribute("class", "hide");

    // Removes the hide class from the main screen element
    mainScreen.classList.remove("hide");

    // Call the onLoad function
    onLoad();
}


// Function to clear out all scores, by deleting key from local storage
function clearScores() {

    // Sets the scores cleared to true
    scoresCleared = true;

    // Remove from local storage
    localStorage.removeItem("codingScores");

    // Calls function
    returnToMain();
}

window.onload = onLoad;
startQuizBtn.addEventListener("click", Quiz);
saveScoreBtn.addEventListener("click", saveScores);
viewScoreBtn.addEventListener("click", displayScores);
returnToQuizBtn.addEventListener("click", returnToMain);
clearScoresBtn.addEventListener("click", clearScores);