const express = require('express')
const app = express()

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(subreddit)
})

app.get('/r/:subreddit/:postid', (req, res) => {
    const { subreddit, postid } = req.params
    res.send(`Viweing post : ${postid} on the ${subreddit} page`)
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})