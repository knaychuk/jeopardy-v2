import { Schema, model, models } from 'mongoose'

const BoardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const Board = models.Board || model('Board', BoardSchema)

export default Board