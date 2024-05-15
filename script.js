console.log("Hello World");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}
