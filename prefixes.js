
// this is entirely coded by chatgpt im not gonna lie

var questions = [];
var questionCount = 5;
var currentQuestion = 0;
var seconds = 0;

function startPrefixTest() {
    currentQuestion = 0;
    seconds = 0;
    questions = [];

    for (var i = 0; i < questionCount; i++) {
        questions.push(newQuestion())
    }

    nextQuestion();
    $("#test").show();
    $("#results").hide();
    $(".info").hide();
    $("#summary").hide();

    startTimer();

    $("#answer").on('keypress', function (e) {
        if (e.which == 13) {
            var question = questions[currentQuestion - 1];
            question.yourAnswer = $("#answer").val();
            question.isCorrect = question.yourAnswer == question.answer;
            $("#answer").val("");
            nextQuestion();
        }
    });
}

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
        var q = questions[i];
        $("#result-list")
            .append(
    `<li>Question ${i+1}: ${q.question} <br> <span class="${q.isCorrect ? "green-text" : "red-text"}">Your Answer: ${q.yourAnswer} | Correct Answer: ${q.answer}</span></li>`);
        if (q.isCorrect)
            correctCount++;
    }

    $("#summary").html(`Correct Answers: ${correctCount} of ${questionCount} <br>Time: ${seconds} seconds`);
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
}

function notate(number) {
    const prefixes = ["p", "n", "u", "m", "", "k", "M", "G", "T"];

    if (isNaN(number) || number === 0) {
        return "0";
    }

    const exponent = Math.floor(Math.log10(Math.abs(number)) / 3);
    if (exponent < -4 || exponent > 4) {
        return "Out of range";
    }

    const normalizedNumber = number / Math.pow(10, exponent * 3);
    const prefix = prefixes[exponent + 4]; // Adjusting the index

    // Round the normalized number to a specific number of decimal places (e.g., 2)
    const roundedNumber = normalizedNumber.toFixed(0);

    return `${roundedNumber}${prefix}`;
}

function findVars() {
    const mylist = [1, 10, 100, 1000, 10000, 100000, 1000000, 0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
    const a = Math.floor(Math.random() * 5) + 1;
    const multiplier = Math.floor(Math.random() * 4) + 1;
    const b = a * multiplier;
    const mOrD = Math.floor(Math.random() * 2) + 1;
    const randomIndex1 = Math.floor(Math.random() * mylist.length);
    const aResult = a * mylist[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * mylist.length);
    const bResult = b * mylist[randomIndex2];
    return [aResult, bResult, mOrD];
}

function findAns(a, b, mOrD) {
    if (mOrD === 1) {
        return a * b;
    }
    return b / a;
}

function newQuestion() {
    const [a, b, mOrD] = findVars();
    const md = mOrD === 1 ? 'x' : '/';
    const ans = findAns(a, b, mOrD);
    
    // Format the ans variable with engineering notation
    const formattedAns = notate(ans);
    const formattedA = notate(a);
    const formattedB = notate(b);

    if (md === '/') {
        return{
            question: `${formattedB} ${md} ${formattedA}`,
            answer: formattedAns
        }
    }
    else {
        return{
            question: `${formattedA} ${md} ${formattedB}`,
            answer: formattedAns
        }
    }
}