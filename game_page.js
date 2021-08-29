player1_name = localStorage.getItem("Player 1:");
player2_name = localStorage.getItem("Player 2:");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = " = " + player1_score;
document.getElementById("player2_score").innerHTML = " = " + player2_score;

document.getElementById("player_question").innerHTML = "Question turn = " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn = " + player2_name;

function send(){
    get_word = document.getElementById("word_text").value;
    word = get_word.toLowerCase();
    console.log("Word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide);
    console.log(charAt2);

    length_minus = word.length - 1;
    charAt3 = word.charAt(length_minus);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    number1 = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    number2 = "<br/> Answer: <input type='text' id='answer_input'>";
    number3 = "<br/><br/> <button type='submit' class='btn btn-info' onclick='check()'>Check</button>";
    row = number1 + number2 + number3;
    console.log(row);
    document.getElementById("output").innerHTML = row;
    document.getElementById("word_text").innerHTML = " ";
}

question_turn = "Player_1";
answer_turn = "Player_2";

function check()
{
 get_answer = document.getElementById("answer_input").value;
 answer = get_answer.toLowerCase();
 console.log("Answer in lowercase - " + answer);

if (answer == word)
{
    if (answer_turn == "Player_1")
    {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML = " = " + player1_score;
    }
    else
    {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = " = " + player2_score;
    }
}

if (question_turn == "Player_1")
{
    question_turn = "Player_2";
    document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
}
else
{
    question_turn = "Player_1";
    document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
}

if (answer_turn == "Player_1")
{
    answer_turn = "Player_2";
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;
}
else
{
    answer_turn = "Player_1";
    document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
}

document.getElementById("output").innerHTML = "";
}