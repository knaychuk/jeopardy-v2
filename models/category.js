import { Schema, model, models } from 'mongoose'

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  boardId: {
    type: String,
    required: true
  }
})

const Category = models.Category || model('Category', CategorySchema)

export default Category