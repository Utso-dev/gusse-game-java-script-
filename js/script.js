let start = document.querySelector(".start");
let startbtn = document.querySelector(".startbtn");
let player1 = document.querySelector(".player1");
let player1_title = document.querySelector(".player1_title");
let player1_input = document.querySelector(".player1_input");
let player1_btn = document.querySelector(".player1_btn");
let player1_error = document.querySelector(".player1_error");
let player2 = document.querySelector(".player2");
let player2_title = document.querySelector(".player2_title");
let player2_input = document.querySelector(".player2_input");
let player2_btn = document.querySelector(".player2_btn");
let player2_error = document.querySelector(".player2_error");
let limit = 3;



function startgame() {
    player1.style.display = "block"
    start.style.display = "none"
}

player1_btn.addEventListener("click", function () {
    if (player1_input.value - 100) {
        player1_error.innerHTML = "";
        if (player1_input.value > 0 && player1_input.value < 10) {
            player1_error.innerHTML = "";
            player1.style.display = "none";
            player2.style.display = "block";
        }
        else{
            player1_error.innerHTML = "Please enter number between 1 - 9";
            player1_error.style.color = "red";
            player1_error.style.fontSize = "20px";
        }
    }
    else{
        player1_error.innerHTML = "Please enter only number";
        player1_error.style.color = "red";
        player1_error.style.fontSize = "20px";
    }
});

player2_btn.addEventListener("click", function () {
    if (player2_input.value - 1) {
        player2_error.innerHTML = "";
        if (player2_input.value > 0 && player2_input.value < 10) {
            player2_error.innerHTML = "";
            if (player1_input.value == player2_input.value) {
                player2_error.innerHTML = "Player 2 is won the game";
                player2_title.style.display = "none";
                player2_btn.style.display = "none";
                player2_input.style.display = "none";
            }
            else{
                if (limit > 1) {
                    limit--;
                    player2_error.innerHTML = `You have only ${limit} guess`
                    player2_error.style.color = "red";
                }
                else{
                    player2_error.innerHTML = "Player 1 is won the game";
                    player2_title.style.display = "none";
                    player2_btn.style.display = "none";
                    player2_input.style.display = "none";
                }
            }
        }
        else{
            player2_error.innerHTML = "Please enter number between 1 - 9";
            player2_error.style.color = "red";
            player2_error.style.fontSize = "20px";
        }
    }
    else{
        player2_error.innerHTML = "Please enter only number";
        player2_error.style.color = "red";
        player2_error.style.fontSize = "20px";
    }
});