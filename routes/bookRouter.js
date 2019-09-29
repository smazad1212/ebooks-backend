import express from 'express'
import booksController from '../controller/booksController'
import Book from '../models/bookModel'

const routes = Book => {
  const bookRouter = express.Router()
  const controller = booksController(Book)

  bookRouter.route('/books')
    .get(controller.get)

  return bookRouter
}

export default routes