const express = require('express')
const path = require('path')
const methodoverride = require('method-override')

const { v4: uuid } = require('uuid')

const app = express()

let comments = [
    {
        id: uuid(),
        user: 'ganesh',
        text: 'I have a group of companies'
    },
    {
        id: uuid(),
        user: 'lakshmi',
        text: 'i have a son having group of companies,lol'
    },
    {
        id: uuid(),
        user: 'suvarna',
        text: 'I have a brother having group of companies'
    },
    {
        id: uuid(),
        user: 'rambabu',
        text: 'If my boy has comapany i too have a company'
    }
]

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodoverride('_method'))

// app.get('/home', (req, res) => {
//     res.send("This is get response")
// })


app.get('/comments', (req, res) => {
    console.log("Into app.get('/comments')")
    res.render('comments/index', { comments })
})


app.get('/comments/new', (req, res) => {
    // res.render('New comment page!!')
    console.log('Into app.get("/comments/new")')
    res.render('comments/NewComment')
})

app.get('/comments/:id', (req, res) => {
    // console.log(req.body)
    console.log("Into app.get('/comments/:id')")
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    // console.log(comment)
    // console.log(comment)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    console.log("Into app.get('/comments/:id/edit')")
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    // console.log(comment)
    res.render('comments/edit', { comment })
})

app.post('/comments', (req, res) => {
    console.log("Into app.post('/comments')")
    const { username, comment } = req.body
    comments.push({ user: username, text: comment, id: uuid() })
    // console.log(comments)
    res.redirect('/comments')
})

app.patch('/comments/:id', (req, res) => {
    console.log('INto app.patch("/comments/id")')
    const { id } = req.params
    // console.log(id)
    const newComment = req.body.editcomment
    // console.log(newComment)
    const foundcomment = comments.find(c => c.id === id)
    // console.log(foundcomment)
    foundcomment.text = newComment
    // res.send("Updated Successfully")
    res.redirect(`/comments/${id}`)
})


app.delete('/comments/:id', (req, res) => {
    console.log('INto app.delete("/comments/id")')
    const { id } = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})

// app.post('/home', (req, res) => {
//     const data = req.body
//     // console.log(data)
//     res.send(`Details are ${data.username} and ${data.password}`)
// })

app.listen(3000, () => {
    console.log("listening on 3000")
})