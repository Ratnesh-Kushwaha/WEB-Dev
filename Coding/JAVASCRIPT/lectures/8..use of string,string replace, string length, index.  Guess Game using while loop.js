let str4 = "Hello";
console.log(str4.replace("el", "oo"));

let str1 = "Hello World.";
console.log(str1.length);
console.log(str1[4])                    //this give o from str1 as index no. 4

// GUESSING GAME
let user = prompt("Guess the number:");
let nom = 33;
while (user != nom) {
    user = prompt("you have entered wrong number, Guess  again:");
}
console.log("Congrat you have guess the correct number that is", nom)


