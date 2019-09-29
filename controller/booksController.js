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
    book.save()
    return res.status(201).json(book)
  }

  return { get, post }
}

export default booksController