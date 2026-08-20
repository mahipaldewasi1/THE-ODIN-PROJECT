// console.log("hello");









function playGame() {
    let getComputerChoice = () => {
        let arr = ["rock", "paper", "scissor"];
        let val = Math.floor(Math.random() * arr.length);
        return arr[val];
    }



    let getHumanChoice = () => {
        let val = prompt("enter any one  rock - paper - scissor");
        return val;
    }



    let humanscore = 0;
    let compScore = 0;

    function playGround(computerChoice, humanChoice) {
        let humanchoice = humanChoice.toLowerCase();

        if (computerChoice === "rock") {
            if (humanchoice === "rock") {
                console.log('draw');
            }
            else if (humanchoice === "paper") {
                humanscore++
                console.log('win');
            }
            else {
                compScore++
                console.log('loose')
            }
        }
        else if (computerChoice === "paper") {
            if (humanchoice === "rock") {
                compScore++
                console.log('loose');
            }
            else if (humanchoice === "paper") {
                console.log('draw');
            }
            else {
                humanscore++
                console.log('win');
            }
        }
        else {
            if (humanchoice === "rock") {
                humanscore++
                console.log('win');
            }
            else if (humanchoice === "paper") {
                compScore++
                console.log('loose');
            }
            else { console.log('draw'); }
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`round ${i + 1}`);
        playGround(computerChoice, humanChoice);


    }

    console.log(`you score ${humanscore}`);
    console.log(`computer score ${compScore}`)
    if (humanscore < compScore) {
        console.log("you are loser ")
    }
    else if (humanscore > compScore) {
        console.log("your are winner")
    }
    else {
        console.log("draw")
    }

}

playGame();
