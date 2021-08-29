function addUser(){
    var player1_name = document.getElementById("player1_name").value;
    var player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("Player 1:", player1_name);
    localStorage.setItem("Player 2:", player2_name);
    console.log("Saved");

    window.location = "game_page.html";
    console.log("Logged in");
}