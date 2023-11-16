import mongoose from "mongoose"

export const connectToDB = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB")
    })
    .catch((err) => {
      console.log(err)
    })
}