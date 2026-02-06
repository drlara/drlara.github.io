//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess)

//Global variables
//generates random number between 1 and 99
let randomNumber = Math.floor(Math.random() * 99) + 1; 

function guess(){

    let userGuess = document.querySelector("#userGuess").value;    
    //"value" is ONLY for input elements
    //alert(userGuess);
    //document.querySelector("#userGuesses").textContent += userGuess + " ";
    document.querySelector("#userGuesses").textContent += ` ${userGuess} `;

    document.querySelector("#userGuesses").style.color = "red";
    document.querySelector("#userGuesses").style.backgroundColor = "yellow";

    // if (userGuess > randomNumber) {

    // }
}
