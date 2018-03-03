    // <script type="text/javascript">


        var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


         // var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var gameStatus = document.getElementById("game");

        document.onkeyup = function(event) {
            var userGuess = event.key;
            console.log(computerGuess); 
            var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        if (computerGuess === userGuess) {
            wins++;
            guessesLeft = 9;
            console.log(wins);
        }
        // else {
        //     guessesLeft = guessesLeft--;
        // }
        else if (computerGuess !== userGuess) {
            guessesLeft--;
            console.log('You lost');
            if (guessesLeft === 0) {
                losses++;
                guessesLeft = 9;
            }
        }
        else {
            guessesLeft = guessesLeft--;
        }

        gameStatus.innerHTML = `
        <p> You chose: ${userGuess}</p>
        <p> Computer chose: ${computerGuess}</p>
        <p> Wins: ${wins}</p>
        <p> Losses: ${losses}</p>
        <p> Guesses left: ${guessesLeft}</p>
        `;
            

        

            // var computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            // console.log("User Guess: " + userGuess);

            // console.log("Computer choice: " + computerChoice);
    

        };




        // var arr=[]; 
        // for (var idx='a'.charCodeAt(0),end='z'.charCodeAt(0); idx <=end; ++idx){arr.push(String.fromCharCode(idx));} arr.join();
    
        //     console.log(arr);




// </script>
