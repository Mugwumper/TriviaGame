var wins = 0;
var losses = 0;
var currentQuestionIndex = -1;
var currentQ;
var intervalId; // this is used by the countDown object
var clockRunning = false;
/// times 
const timeShowQuestionDefault = 5; // How much time the user has to answer the question
const timeShowAnswer = 4000;
var isAnswered = false;


var countDown = {
    time: 0,
    reset: function () {
        countDown.time = timeShowQuestionDefault;
    },
    countDownString: function () {
        if (countDown.time > 0) {
            return "Time remaining: " + countDown.time + " seconds";
        } else {
            countDown.clockRunning = false;
            countDown.time = 0;
            return "Time remaining: " + countDown.time + " seconds";
        }
    },
    start: function (time) {
        if (!countDown.clockRunning) {
            clearInterval(intervalId);
            intervalId = setInterval(countDown.doCountDown, 950);
            countDown.clockRunning = true;
        }
        if (time === undefined) {
            countDown.time = timeShowQuestionDefault;
        } else {
            if (time > 999) {
                 // this is cheesy, some things call this having a value in ms not seconds.
                time = time / 1000;
            }
            countDown.time = time;
        }
        countDown.updateGUI();
    },
    stop: function () {
        clearInterval(intervalId);
        countDown.clockRunning = false;
    },
    doCountDown: function () {
        if (countDown.time > 0) {
            countDown.time--;
            countDown.updateGUI();
        } else {
            countDown.stop;
            applyAnswer(-1);
        }
    },
    updateGUI: function() {
        if (isAnswered) {
            $("#rTime").text(countDown.time);
        } else {
            var s = countDown.countDownString();
            $("#Qtime").text(s);
        }

    }
}

reset();

function reset() {
    wins = 0;
    losses = 0;
    showPanel('intro');
    currentQuestionIndex = -1;
    initItems();
}

function showPanel(panel) {
    $("#intro").hide();
    $("#Q1").hide();
    $("#end").hide();
    $("#qReport").hide();
    switch (panel) {
        case 'Q1':
            $("#Q1").show();
            break;
        case 'end':
            $("#end").show();
            break;
        case 'intro':
            $("#intro").show();
            break;
        case 'qReport':
            $("#Q1").fadeOut(100);
            $("#qReport").fadeIn(1500);
            break;
        default:
            $("#end").show();
            $("#winslabel").text("ERROR: showPanel called using '" + panel + "'");
            break;
    }
}

$("#intro").on("click", function () {
    $(this).fadeOut(800, function () {
        $(this).hide();
        $("#Q1").fadeIn(1000);
        loadNext();
    })
});

function buttonA() {
    applyAnswer(1);
}

function buttonB() {
    applyAnswer(2);
}

function buttonC() {
    applyAnswer(3);
}

function buttonD() {
    applyAnswer(4);
}

function buttonE() {
    applyAnswer(5);
}

function buttonF() {
    applyAnswer(6);
}

function buttonG() {
    applyAnswer(7);
}

function buttonH() {
    applyAnswer(8);
}

function applyAnswer(userAnswer) {
    console.log("answer applied: " + userAnswer);
    countDown.stop();
    isAnswered = true;  
    setTimeout(countDown.start(currentQ.timeToLearn), 100);
    switch (userAnswer) {
        case currentQ.aKey:
            // show "this is correct"
            wins++;
            $("#qrHeader").text("You are correct: " + currentQ.aHeader);
            break;
        case -1:
            // time ran out     
            losses++;
            $("#qrHeader").text("Time expired, correct answer is: " + currentQ.aHeader);
            break;
        default:
            // show "this is incorrect"
            losses++;
            $("#qrHeader").text("You are incorrect: " + currentQ.aHeader);
    }
    $("#qrText").text(currentQ.aText);
    showPanel("qReport");
    setTimeout(loadNext, currentQ.timeToLearn * 1000);
}

function loadNext() {
    $("#qReport").hide();
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        showGameEnd();
    } else {
        loadQuestion(currentQuestionIndex);
    }
}

function loadQuestion(Qindex) {
    clearAnswers();
    isAnswered = false;
    currentQ = questions[Qindex];
    console.log(currentQ);
    $("#Qt").text(currentQ.questionText);
    $("#Q1").fadeIn(1000);
    $("Qtime").fadeIn(300);
    if (currentQ.at1 !== "") {
        $("#A1t").text(currentQ.at1);
    }
    if (currentQ.at2 !== "") {
        $("#A2t").text(currentQ.at2);
    }
    if (currentQ.at3 !== "") {
        $("#A3t").text(currentQ.at3);
    }
    if (currentQ.at4 !== "") {
        $("#A4t").text(currentQ.at4);
    }
    if (currentQ.at5 !== "") {
        $("#A5t").text(currentQ.at5);
    }
    if (currentQ.at6 !== "") {
        $("#A6t").text(currentQ.at6);
    }
    if (currentQ.at7 !== "") {
        $("#A7t").text(currentQ.at7);
    }
    if (currentQ.at8 !== "") {
        $("#A8t").text(currentQ.at8);
    }
    showAnswers(currentQ);
    setTimeout(countDown.start(currentQ.timeToAnswer), 100);
}

function showAnswers(currentQ) {
    setTimeout(show1, 1000);
    setTimeout(show2, 1500);
    setTimeout(show3, 2000);
    setTimeout(show4, 2500);
    setTimeout(show5, 3000);
    setTimeout(show6, 3500);
    setTimeout(show7, 4000);
    setTimeout(show8, 4500);

    function show1() {
        if (currentQ.at1 !== undefined) {
            $("#A1").prop("checked", false);
            $("#A1t").fadeIn(500);
            $("#A1").fadeIn(500);
        }
    }

    function show2() {
        if (currentQ.at2 !== undefined) {
            $("#A2").prop("checked", false);
            $("#A2").fadeIn(500);
            $("#A2t").fadeIn(500);
        }
    }

    function show3() {
        if (currentQ.at3 !== undefined) {
            $("#A3").prop("checked", false);
            $("#A3").fadeIn(500);
            $("#A3t").fadeIn(500);
        }
    }

    function show4() {
        if (currentQ.at4 !== undefined) {
            $("#A4").prop("checked", false);
            $("#A4").fadeIn(500);
            $("#A4t").fadeIn(500);
        }
    }

    function show5() {
        if (currentQ.at5 !== undefined) {
            $("#A5").prop("checked", false);
            $("#A5").fadeIn(500);
            $("#A5t").fadeIn(500);
        }
    }

    function show6() {
        if (currentQ.at6 !== undefined) {
            $("#A6").prop("checked", false);
            $("#A6").fadeIn(500);
            $("#A6t").fadeIn(500);
        }
    }

    function show7() {
        if (currentQ.at7 !== undefined) {
            $("#A7").prop("checked", false);
            $("#A7").fadeIn(500);
            $("#A7t").fadeIn(500);
        }
    }

    function show8() {
        if (currentQ.at8 !== undefined) {
            $("#A8").prop("checked", false);
            $("#A8").fadeIn(500);
            $("#A8t").fadeIn(500);
        }
    }
}  // end of showAnswers

function clearAnswers() {
    $("#Q1").hide();
    $("#A1").hide();
    $("#A1t").text("");
    $("#A1t").hide();
    $("#A2t").text("");
    $("#A2").hide();
    $("#A2t").hide();
    $("#A2t").text("");
    $("#A3").hide();
    $("#A3t").hide();
    $("#A3t").text("");
    $("#A4").hide();
    $("#A4t").hide();
    $("#A4t").text("");
    $("#A5").hide();
    $("#A5t").hide();
    $("#A5t").text("");
    $("#A6").hide();
    $("#A6t").hide();
    $("#A6t").text("");
    $("#A7").hide();
    $("#A7t").hide();
    $("#A7t").text("");
    $("#A8").hide();
    $("#A8t").hide();
    $("#A8t").text("");
}

function showGameEnd() {
    countDown.stop();
    $("#winslabel").text("wins = " + wins);
    showPanel("end");
}