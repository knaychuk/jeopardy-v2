'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'



const DiscoverBoards = ({ searchParams }) => {
  const router = useRouter()
  const [boards, setBoards] = useState(null)

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await fetch('/api/boards/get')
      const data = await response.json()

      setBoards(data)
    }

    fetchBoards()

  }, [])

  const handleDelete = (id) => {
    router.push(`/delete-board?id=${id}`)
  }

  return (
      
    <div className='flex flex-col justify-center items-center '>
      <Link
        href="/"
        className="text-primary text-3xl absolute top-5 left-10 hover:underline"
      >&#8592; Back</Link>
      <h1 className='text-primary text-8xl mt-20 mb-10'>Discover Boards!</h1>
        <div className='flex flex-col'>
          {boards && boards.map((board) => (
            <div key={board._id} className='board-container relative flex font-OpenSans pr-[10rem] group'>
              <Link 
              
                href='boards/id'
                className='board-link font-OpenSans'
              >
                {board.name} 
                
              </Link>
              <button onClick={() => {handleDelete(board._id)}} className='board-delete-button absolute right-10 top-3 invisible group-hover:visible'>Delete</button>
             </div>
          ))}
          
        </div>
      

    </div>
   
  )
}
export default DiscoverBoards

