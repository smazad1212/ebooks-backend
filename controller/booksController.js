const booksController = (Book) => {
  const get = (req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err)
      }
      return res.json(books)
    })
  }

  return { get }
}

export default booksController