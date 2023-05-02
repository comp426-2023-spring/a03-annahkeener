export function rpsFunct(args) {

    var options = ["paper", "rock", "scissors"];
    var rpslsOpts = ["lizard", "spock"];


    var playerChoice = "";

    if (args._[0] == null) {
        playerChoice = "rock";
        var JSONResultNoArg = { player : playerChoice, opponent : compChoice, result : gameResult};
        console.log("Type something, silly goose! \n\n(Options: rock, paper, scissors)\n")
        return JSONResultNoArg;
    } else {
        playerChoice = args._[0].toLowerCase();
    }


    if (rpslsOpts.includes(playerChoice)) {
        console.error("\n'" + playerChoice + "' is out of range.");
    } else if (!(options.includes(playerChoice))) {
        console.error("'" + args._[0] + "' is not an option, silly goose! \n\n(Options: rock, paper, scissors)\n")
    } 

    var randomNum = Math.floor(Math.random() * 3);
    var compChoice = options[randomNum];
    
   
    if (compChoice == playerChoice) {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nTie!");
        var gameResult = "tie";
    } else if (compChoice == "scissors" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "rock" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && playerChoice == "rock") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "rock" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    } else if (compChoice == "scissors" && playerChoice == "paper") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou lose :(");
        var gameResult = "lose"; 
    } else if (compChoice == "paper" && playerChoice == "scissors") {
        console.log("You: " + playerChoice + "\nOpponent: " + compChoice + "\n\nYou win!");
        var gameResult = "win"; 
    }

    var JSONResult = { player : playerChoice, opponent : compChoice, result : gameResult};


    return JSONResult;
}