    var win = 0;
    var loss = 0;
    var guessesLeft = 9;
    var guessSoFar = [];
    var alphabetArray= "abcdefghijklmnopqrstuvwxyz".split('');
    // console.log(alphabetArray);
    var computerGuess = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
   // the above variable will use random number generator to get a number between 0 and 25 which
   // will correspond to an index within the alphabetArray to select a random number

    function reset (){
     guessesLeft = 9;
     guessSoFar = [];
    computerGuess = alphabetArray[Math.floor(Math.random()*alphabetArray.length)];
    } // resets the values at the beginning of the game


      // start of the event
      document.onkeyup = function(event){
        var userGuess = event.key.toLowerCase();
        // console.log(computerGuess);

      // This if statement checks to make sure the key entered was valid and if it is then it is false and moves to the next if statement 
     if(alphabetArray.indexOf(userGuess) === -1){
        alert("you must enter a valid letter")
        } else if(userGuess !== computerGuess){
              if(guessSoFar.indexOf(userGuess) === -1){
                guessesLeft--;  
                guessSoFar.push(userGuess);
                } // checks to see if character is already there and if not it will push guess into guessSoFar array
                    if(guessesLeft === 0){
                    loss++;
                    reset();
                      } // checks to see if guess if 0 then resets if true and adds loss
             } // end of first if statement
            else{
              win++;
              reset();
            }

        console.log(guessSoFar);
        /*
        function indexOf (arr, str) {

          for (var i = 0; i < arr.length; i++) {
            if(arr[i] === str) {
              return i;
            } else {
              return -1;
            }
          }
         */ 
   
 
        var html = "<p> guess what letter I'm thinking of <p>" +
       "<p> wins: " + win + "</p>" + "<p> Losses: " + loss + "</p>" + "<p> Guesses Left: " + guessesLeft + "</p>" + "<p>Your Guesses so far: " + guessSoFar + " </p>";

        document.querySelector('#game').innerHTML = html;
     } // where the key event ends





     