import Board from "@models/board";
import Category from "@models/category";
import { connectToDB } from "@utils/database";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB()

    await Board.findByIdAndRemove(params.id)
    await Category.deleteMany({ boardId: params.id})

    return new Response("Board + Categories deleted", {status: 200})
  } catch (err) {
    return new Response("Failed to delete board or categories", {status: 500})
  }
}