var player_1_name = localStorage.getItem("player1_name");
var player_2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn: " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2_name;


function sendQuestion() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    actualAnswer = parseInt(num1) + parseInt(num2);
    console.log(actualAnswer);

    var question_equation = "<h4 id = 'question_display'>Q. " + num1 + " + " + num2 + "</h4>";
    input_box = "<br><br>Answer: <input type = 'text' id = 'input_check_answer'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check_answer()'>Check</button>";
    row = question_equation + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}

question_turn = "player1";
answer_turn = "player2";

function check_answer() {
    get_answer = document.getElementById("input_check_answer").value;
    if(get_answer == actualAnswer) {
        if(answer_turn == "player1") {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        } else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player_2_name;
    } else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn - " + player_1_name;
    }

    if(answer_turn == "player2") {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Asnwer turn - " + player_1_name;
    } else {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player_2_name;
    }
}