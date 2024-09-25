let num = prompt("Enter your number: ");          //this prompt commant will act as input with pop up view
if (num % 5 == 0) {
    console.log(num, "is multiple of 5")
} else if (num % 5 != 0) {
    console.log(num, "is not multiple of 5")
} else { console.log("Invalid input.") }