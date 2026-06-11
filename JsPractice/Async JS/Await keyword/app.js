function delayedchange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)

    })
}



const rainbow = async () => {
    await delayedchange('red', 1000)
    await delayedchange('blue', 1000)
    console.log("All are resolved")
}