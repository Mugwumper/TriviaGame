var wins = 0;
var losses = 0;
var currentQuestionIndex = -1;
var currentQ;
var time = 0;
var intervalId;
var clockRunning = false;


var countDown = {
    time: 0,
    reset: function() {
        countDown.time = 30;
    },
    countDownString: function() {
       return "Time remaining: " + countDown.time + " seconds";
    },
    start: function() {
        if (!clockRunning) {
            clearInterval(intervalId);
            time = 30;
            intervalId = setInterval(countDown.doCountDown, 950);
            countDown.clockRunning = true;
        }
    },
    stop: function() {
        clearInterval(intervalId);
        countDown.clockRunning = false;
    },
    doCountDown: function() {
        countDown.time--;
        var s = countDown.countDownString();
        $("#Qtime").text(s);
    }    
}

reset();

function reset() {
    wins = 0;
    losses = 0;
    $("#intro").show();
    $("#Q1").hide();
    $("#end").hide();   
    $("#qReport").hide();
    currentQuestionIndex = -1;
    initItems();
}

$("#intro").on("click", function () {
    $(this).fadeOut(1000,function(){
        $(this).hide();
        $("#Q1").fadeIn(1000);
        loadNext();
    })
});

function buttonA() {applyAnswer(1);}
function buttonB() {applyAnswer(2);}
function buttonC() {applyAnswer(3);}
function buttonD() {applyAnswer(4);}
function buttonE() {applyAnswer(5);}

function applyAnswer(userAnswer) {
    console.log("answer applied: " + userAnswer);
    if (userAnswer === currentQ.aKey) {
        wins++;
        // show "this is correct"
        $("#qrHeader").text("You are correct: " + currentQ.aHeader);
        $("#qrText").text(currentQ.aText);
        $("#qReport").show();    
    } else {
        // show "this is incorrect"
        $("#qrHeader").text("You are incorrect: " + currentQ.aHeader);
        $("#qrText").text(currentQ.aText);
        $("#qReport").show(); 
    }
    setTimeout(loadNext, 1000);
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
    currentQ = questions[Qindex];
    console.log(currentQ);
    $("#Qt").text(currentQ.questionText);
    $("#Q1").fadeIn(1000);
    if (currentQ.at1 !== "") {$("#A1t").text(currentQ.at1);}
    if (currentQ.at2 !== "") {$("#A2t").text(currentQ.at2);}
    if (currentQ.at3 !== "") {$("#A3t").text(currentQ.at3);}
    if (currentQ.at4 !== "") {$("#A4t").text(currentQ.at4);}
    if (currentQ.at5 !== "") {$("#A5t").text(currentQ.at5);}
    showAnswers();
    countDown.start;
}

function showAnswers() {
    setTimeout(show1, 1000);
    setTimeout(show2, 1500);
    setTimeout(show3, 2000);
    setTimeout(show4, 2500);
    
    function show1() {
        if (currentQ.at1 !== "") {
            $("#A1t").fadeIn(500);
            $("#A1").fadeIn(500);
        }
    }
    function show2() {
        if (currentQ.at2 !== "") {
            $("#A2").fadeIn(500);
            $("#A2t").fadeIn(500);
        }
    }

    function show3() {
        if (currentQ.at3 !== "") {
            $("#A3").fadeIn(500);
            $("#A3t").fadeIn(500);
        }
    }
    
    function show4() {
        if (currentQ.at4 !== "") {
            $("#A4").fadeIn(500);
            $("#A4t").fadeIn(500);
        }
    }

    if (currentQ.at5 !== "") {$("#A5t").show();}
}

function clearAnswers() {
    $("#Q1").hide();
    $("#A1").hide();  
    $("#A1t").text("");  
    $("#A1t").hide();  
    $("#A1").checked = false;  
    $("#A2").checked = false;  
    $("#A3").checked = false;  
    $("#A4").checked = false;  
    
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
}

function showGameEnd() {
    $("#winslabel").text("wins = "+wins);
    $("#Q1").hide();
    $("#end").show();
}