let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");
// fuction to generate the random choice
const getCompChoice = () => {
    // Math.random() generate a random number b/w 0 to 1
    // to get value in range 0 to 2 mul Math.random() with 3
    // Math.floor() remove the decimal value
    // for eg 2.365956 to 2
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const gameDraw = () =>{
    msg.innerText = "Gama was draw.Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // Generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            // paper,scissor
            userWin = compChoice === "paper"?false:true;
        } else if(userChoice ==="paper"){
            // rock,scissor
            userWin = compChoice === "scissor"?false:true;
        } else{
            // rock , paper
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})