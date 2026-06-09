const fakerequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Resolved ra rey!!")
            }
            reject("Rejected ra huka")
        }, 1000)
    })
}

fakerequest('google.com')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })