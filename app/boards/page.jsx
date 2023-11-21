'use client'

import { useState, useEffect } from 'react'

const DiscoverBoards = () => {
  const [boards, setBoards] = useState(null)

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch('/api/boards/get')
      const data = await response.json()

      setBoards(data)
    }

    fetchBoards()

  }, [])



  return (
    <div>
       <h1>Discover Boards!</h1>
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
export default DiscoverBoards