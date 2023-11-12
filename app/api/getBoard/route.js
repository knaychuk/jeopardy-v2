import { connectToDB } from "@/utils/database"

export const GET = async (req) => {
  try {
    await connectToDB()

    return new Response('OK')
  } catch (err) {
    return new Response ('Failed')
  }
}