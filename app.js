import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connect('mongodb://localhost/ebooksAPI')

const bookRouter = express.Router()
import Book from './models/bookModel'

bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err)
      }
      return res.json(books)
    })
  })

app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my API!')
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
