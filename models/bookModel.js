import mongoose, { Schema } from 'mongoose'

const bookModel = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
  }
)

export default mongoose.model('Book', bookModel)
