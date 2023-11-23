import { Schema, models, model } from "mongoose"

const PromptSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  value: {
    type: Number,
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

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt