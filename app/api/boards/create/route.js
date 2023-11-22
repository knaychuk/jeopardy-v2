import { connectToDB } from "@utils/database";
import Board from "@models/board";

export const POST = async (req) => {
  const { name, password } = await req.json()

  try {
    await connectToDB()
    const newBoard = new Board({ name, password })

    await newBoard.save()

    return new Response(JSON.stringify(newBoard), { status: 201 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
} 