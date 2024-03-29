const booksController = (Book) => {
  const get = (req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err)
      }
      return res.json(books)
    })
  }

  const post = (req, res) => {
    const book = new Book(req.body)
    if (!req.body.title) {
      res.status(400)
      return res.send('Title is required')
    }
    book.save()
    res.status(201)
    return res.json(book)
  }

  return { get, post }
}

export default booksController