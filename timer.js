
var timeCounter;
function startTimer() {
    var timeCounter = setTimeout(function () {
        seconds++;
        $("#details").text(`Question ${currentQuestion}/${questionCount} | Seconds: ${seconds}`);
        startTimer();
    }, 1000);
}

function endTimer() {
    clearTimeout(timeCounter);
}

function endTest() {
    endTimer();
    
    $("#test").hide();
    $("#result-list").html("")
    $("#results").show();
    $("#summary").show();

    var correctCount = 0;
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i]; //q containes dictionary returned in other page
        $("#result-list")
            .append(
    `<li>Question ${i+1}: ${q.question} <br> <span class="${q.isCorrect ? "green-text" : "red-text"}">Your Answer: ${displayAnswer(q.yourAnswer)} | Correct Answer: ${displayAnswer(q.answer)}</span></li>`);
        if (q.isCorrect)
            correctCount++;
    }

    $("#summary").html(`Correct Answers: ${correctCount} of ${questionCount} <br>Time: ${seconds} seconds`);
}

function displayAnswer(mylist) {
    ans = ""
    for (let i=0; i<mylist.length-1; i++) {
        ans += mylist[i] + ", "
    }
    ans += mylist[mylist.length-1]
    return ans
}

function nextQuestion() {
    if (currentQuestion + 1 > questionCount) {
        endTest();
        return
    }

    currentQuestion++;

    var question = questions[currentQuestion - 1];

    $("#qlabel").text(question.question);
    $("#details").text(`Question ${currentQuestion}/${questionCount} | Seconds: ${seconds}`);
    $("#image").html(`<img src="${question.image}" />`);
    $("#answerbox").html(``)
    for (let i = 0; i < question.answer.length; i++) {
        $("#answerbox").append(`<input id="ans-${i}" type="text" placeholder="${i+1}" /><br />`);
      }
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function submitAnswer() {
    var question = questions[currentQuestion - 1];
    question.yourAnswer = [];
    for (let i = 0; i < question.answer.length; i++) {
        question.yourAnswer.push($(`#ans-${i}`).val());
    }
    question.isCorrect = arraysAreEqual(question.yourAnswer, question.answer);
    console.log(question.yourAnswer);
    console.log(question.answer);
    console.log(question.isCorrect);
    nextQuestion();
}
