import express from 'express'
import booksController from '../controller/booksController'

const routes = Book => {
  const bookRouter = express.Router()
  const controller = booksController(Book)

  bookRouter.route('/books')
    .get(controller.get)
    .post(controller.post)

  return bookRouter
}

export default routes