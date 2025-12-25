let usreScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const para = document.querySelectorAll("p");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        usreScore++;
        userScorepara.innerText = usreScore;
        console.log("You win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
}
const playGame = (userChoice) => {
    console.log("User choice ", userChoice);
    // Generate comp choice - > modular
    const compChoice = genCompChoice();
    console.log("Comp choice ", compChoice);

    if (userChoice === compChoice) {
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // sicssors , paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("Choice was clicked", userChoice);
        playGame(userChoice)
    });
});