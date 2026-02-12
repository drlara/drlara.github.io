document.querySelector("button").addEventListener("click", gradeQuiz);

//<label><input type="radio" name="q1" value="font-color"> font-color </label>


shuffleQ1Choices();
function shuffleQ1Choices(){

    let q1Choices = ["font-color", "color", "text-color", "color-text"];

    for (let i of q1Choices) {
        let radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(radioElement);
        labelElement.prepend(" ");

        document.querySelector("#q1ChoicesDiv").append(labelElement);

         console.log(labelElement); 
    } //for

}


function gradeQuiz(){

    let q1userAnswer = document.querySelector("input[name=q1]:checked").value;
    alert("grading quiz.. "  + q1userAnswer);

}