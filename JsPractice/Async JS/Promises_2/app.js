const colordelay = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve(`${color} bro`)
        }, delay)
    })
}

colordelay('red', 1000)
    .then((data) => {
        console.log(data)
        return colordelay('orange', 1000)
    })
    .then((data) => {
        console.log(data)
        return colordelay('yellow', 1000)
    })
    .then((data) => {
        console.log(data)
        return colordelay('green', 1000)
    })
    .then((data) => {
        console.log(data)
        return colordelay('blue', 1000)
    })
    .then((data) => {
        console.log(data)
        return colordelay('indigo', 1000)
    })
    .then((data) => {
        console.log(data)
        return colordelay('violet', 1000)
    })
    .then((data) => {
        console.log(data)
    })
