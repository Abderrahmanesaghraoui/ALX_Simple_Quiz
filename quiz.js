// Define the checkAnswer function
function checkAnswer(){
    //Define the correct answer
    const correctAnswer ="4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
 

    // Check if the user's answer is correct
    if(userAnswer === correctAnswer){
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}
// Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click",checkAnswer);