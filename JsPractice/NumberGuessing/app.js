

let maxNumber = parseInt(prompt("Enter a max number:"))
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a valid number:"))
}

let number = Math.floor((Math.random() * maxNumber)) + 1

let guess = parseInt(prompt("Enter a number:"))
let attempts = 0

while (parseInt(guess) !== number) {
    if (guess === 'q') {

        break;
    }
    guess = parseInt(guess)
    if (guess < number) {
        guess = prompt("Too Low")
        attempts++
    }
    else if (guess > number) {
        guess = prompt("Too High")
        attempts++
    }
    else {
        guess = prompt("Invalid guess!Try again")
    }
}

if (guess === 'q') {
    console.log("OKAY!QUITTING")
}
else {
    console.log(`Wow!You made in ${attempts} attempts`)
}