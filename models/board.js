import { Schema, model, models } from 'mongoose'

const BoardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  /*  
  theme: {
    type: String
  }
  */
})

const Board = models.Board || model('Board', BoardSchema)

export default Board