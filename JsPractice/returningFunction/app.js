function genfun(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

const isChild = genfun(0, 18)
console.log(isChild(10))