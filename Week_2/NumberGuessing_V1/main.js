/*eslint-env browser*/
//ask Devon about changing the multi-line comment above into single line
function playGame() {
    alert("First enter a low amount of chicken nuggets, then a high amount of chicken nuggets. Then, guess how many chicken nuggets I gave Christian.");
    
    //get the low and high bounds
    //uses parseInt() to make sure we have number not strings
    var from = parseInt(prompt("Enter the low amount, greater than 0 and less than 1000."));
	
	//this checks that "from" is >0 and <1000 and that "from" is a number
		while(isNaN(from) || from < 0 || from > 1000) {
			from = parseInt(prompt("Please enter an AMOUNT greater than 0 and less than 1000, because I am not making a negative amount of chicken nuggets nor more than 1000."));
		}
	
	
    var to = parseInt(prompt("Enter the higher amount, greater than 0 and less than 1000."));
	
	//this checks that "to" is >0 and <1000, that "to" is a number, and that "to" is greater than "from"
		while(isNaN(to) || to < 0 || to > 1000 || to <= from) {
			to = parseInt(prompt("Please enter an AMOUNT greater than 0 and less than 1000, because I am not making a negative amount of chicken nuggets nor more than 1000. This amount has to be GREATER THAN the lesser amount."));
		}

    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round() to get a whole number
    var target = Math.round(Math.random() * (to - from) + from);

	//make sure the guess is between "to" and "from", and is a number
    var currentGuess = parseInt(prompt("Guess how many chicken nuggets I gave Christian, between " + from + " and " + to + " chicken nuggets."));
		while(currentGuess < from || currentGuess > to || isNaN(currentGuess)) {
			currentGuess = parseInt(prompt("Please enter a NUMBER between " + from + " and " + to + "."))
		}

    var totalGuesses = 1;

    //loop until user guesses correct number
    while(currentGuess != target) {
        if (currentGuess < target) {
            currentGuess = parseInt(prompt ("Christian gets more than that!"));
    
                totalGuesses ++;
        }else if (currentGuess > target) {
            currentGuess = parseInt(prompt("Christian gets less than that."));
            
            totalGuesses++;
        }
    }

    alert("It took " + totalGuesses + " tries to guess how many he got.");
}