import Board from '@models/board'
import { connectToDB } from '@utils/database'

export const dynamic = 'force-dynamic';
export const GET = async (req, { params }) => {
  try {
    await connectToDB()

    const board = await Board.findById(params.id)
    
    return new Response(JSON.stringify(board), { status: 200})

  } catch (err) {
    return new Response ('Failed to fetch board', { status: 500 })
  }
}