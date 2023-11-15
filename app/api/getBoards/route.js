// import Board from '@/models/board'
// import { connectToDB } from '@/utils/database'

// export const GET = async (req) => {
//   try {
//     await connectToDB()

//     const boards = await Board.find({})
    
//     return new Response(JSON.stringify(boards), { status: 200})

//   } catch (err) {
//     return new Response ('Failed to fetch boards', { status: 500 })
//   }
// }