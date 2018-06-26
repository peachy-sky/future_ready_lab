/*eslint-env browser*/
function playGame() {
    alert("First enter a low amount of chicken nuggets, then a high amount of chicken nuggets. Then, guess how many chicken nuggets I gave Christian.");
    
    //get the low and high bounds
    //uses parseInt() to make sure we have number not strings
    var from = parseInt(prompt("Enter the low amount."));
	
	//this checks if "from" is a number
		while(isNaN(from)) {
			from = parseInt(prompt("Please enter a NUMBER."))
		}
	
	//this checks that "from" is >0 and <1000
		while(from < 0 || from > 1000) {
			from = parseInt(prompt("Please enter an amount greater than 0 and less than 1000, because I am not making a negative amount of chicken nuggets nor more than 1000."));
		}
	
	
    var to = parseInt(prompt("Enter the higher amount."));
	
	//this checks if "to" is a number
		while(isNaN(to)) {
			to = parseInt(prompt("Please enter a NUMBER."))
		}
	
	//this checks that "to" is >0 and <1000
		while(to < 0 || to > 1000) {
			to = parseInt(prompt("Please enter an amount greater than 0 and less than 1000, because I am not making a negative amount of chicken nuggets nor more than 1000."));
		}
	
	//this checks that "to" is > "from"
		while(to <= from) {
			to = parseInt(prompt("Please enter a number greater than the lower amount."))
		}
	

    //get an integer between [from, to]
    //Math.random() returns decimals, used Math.round() to get a whole number
    var target = Math.round(Math.random() * (to - from) + from);

    var currentGuess = parseInt(prompt("Guess how many chicken nuggets I gave Christian, between " + from + " and " + to + " chicken nuggets."));
		while(currentGuess < from || currentGuess > to) {
			currentGuess = parseInt(prompt("Please enter a number between " + from + " and " + to + "."))
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