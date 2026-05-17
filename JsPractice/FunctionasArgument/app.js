function calltwice(func) {
    func()
    func()
}

function rolldie() {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

calltwice(rolldie)