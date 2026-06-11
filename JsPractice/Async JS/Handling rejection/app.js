async function errorhandling() {
    throw "Just checking error handling"
}

async function checking() {
    try {
        console.log("Into functon checking")
        errorhandling()
    }
    catch (e) {
        console.log(e)
    }
}