

let maxNumber = parseInt(prompt("Enter a max number:"))
while (!maxNumber) {
    maxNumber = parseInt(prompt("Enter a valid number:"))
}

let number = Math.floor((Math.random() * maxNumber)) + 1

let guess = parseInt(prompt("Enter a number:"))
let attempts = 0

while (parseInt(guess) !== number) {
    attempts++
    if (guess === 'q') {

        break;
    }
    if (guess < number) {
        guess = prompt("Too Low")
    }
    else {
        guess = prompt("Too High")
    }
}

if (guess === 'q') {
    console.log("OKAY!QUITTING")
}
else {
    console.log(`Wow!You made in ${attempts} attempts`)
}