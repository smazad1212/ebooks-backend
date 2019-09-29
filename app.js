import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3000
const db = mongoose.connect('mongodb://localhost/ebooksAPI')

import routes from './routes/bookRouter'
import Book from './models/bookModel'

const bookRouter = routes(Book)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', bookRouter)

app.get('/', (req, res) => {
  res.send('Welcome to E-Books API!')
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
