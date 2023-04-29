export function rpsFunct(playerChoice) {

    var options = ["paper", "rock", "scissors"];

/*if (input.spock|| args[2] == "spock" || args[2] == "Lizard" || args[2] == "lizard") {
    console.error(args[2] + " is out of range.")
}*/

    console.log("player choice: " + playerChoice);


    var randomNum = Math.floor(Math.random() * 3);
    var compChoice = options[randomNum];
    console.log("random num: " + randomNum);
    console.log("computer's choice: " + compChoice);


    return 0;
}