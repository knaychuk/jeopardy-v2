import { connectToDB } from "@utils/database";
import Board from "@models/board";
import Category from "@models/category";

export const POST = async (req) => {
  const { name, password } = await req.json()

  try {
    await connectToDB()
    const newBoard = await Board.create({ name, password })
    const newBoardId = await newBoard._id

    const newCategory = await Category.create({ name: 'category', position: 0, boardId: newBoardId })

    return new Response(JSON.stringify(newBoard, newCategory), { status: 200 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
} 