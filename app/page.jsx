'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [boards, setBoards] = useState(null)

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch('/api/getBoards')
      const data = await response.json()

      setBoards(data)
    }

    fetchBoards()

  }, [])

  return (
   <div>
    {boards && boards.map((board) => (
      <div key={board._id}>
        {board._id}
        {board.title}
        {board.password}
      </div>
    ))}


   </div>
  )
}
