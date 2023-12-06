'use client'

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

const DeleteBoard = () => {
  const searchParams = useSearchParams()
  const boardId = searchParams.get('id')

  const [board, setBoard] = useState({})

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch('/api/boards/get')
      const data = response.json()

      setBoard(data)
    }

    fetchBoards()
  }, [])

  return (
    <div>DeleteBoard</div>
  )
}
export default DeleteBoard