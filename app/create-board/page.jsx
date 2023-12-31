'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

import CreateBoardForm from "@components/CreateBoardForm"

const CreateBoard = () => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [board, setBoard] = useState({
    name: '',
    password: ''
  })

  const createBoard = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch('/api/boards/create', {
        method: 'POST',
        body: JSON.stringify({
          name: board.name,
          password: board.password
        })
      })

      if(response.ok) {
        router.push('/boards')
        console.log('board added')
      }
      
    } catch (err) {
      console.log(err)
    }
  
  }

  return (   
    <div className="flex justify-center items-center">
      <Link
        href="/"
        className="text-primary text-3xl absolute top-5 left-10 hover:underline"
      >&#8592; Back</Link>
      <CreateBoardForm
        board={board}
        setBoard={setBoard}
        submitting={submitting}
        handleSubmit={createBoard}
      />
    </div> 
  
  )
}
export default CreateBoard