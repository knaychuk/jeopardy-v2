'use client'
import Link from 'next/link'
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
      
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-primary text-8xl mt-20 mb-10'>Discover Boards!</h1>
        <div className='flex flex-col text-center'>
          {boards && boards.map((board) => (
            <Link 
              key={board._id}
              href='boards/id'
              className='board-link font-OpenSans'
            >
              {board.title} 
            </Link>
          ))}
          
        </div>
      

    </div>
   
  )
}
export default DiscoverBoards

