//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", guess)

//global variables
let randomNumber = Math.floor(Math.random() * 99) + 1;

function guess(){

    let userGuess = document.querySelector("#guessBox").value;
    //alert(userGuess);

    //document.querySelector("#answers").textContent += userGuess + ", ";
    document.querySelector("#answers").textContent += ` ${userGuess} `;

}