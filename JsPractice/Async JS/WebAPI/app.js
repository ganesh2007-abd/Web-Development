setTimeout(function () {
    document.body.style.backgroundColor = 'white'
    setTimeout(function () {
        document.body.style.backgroundColor = 'indigo'
        setTimeout(function () {
            document.body.style.backgroundColor = 'blue'
            setTimeout(function () {
                document.body.style.backgroundColor = 'green'
                setTimeout(function () {
                    document.body.style.backgroundColor = 'yellow'
                    setTimeout(function () {
                        document.body.style.backgroundColor = 'orange'
                        setTimeout(function () {
                            document.body.style.backgroundColor = 'red'
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)