'use client'

import { useState } from "react"

import CreateBoardForm from "@components/CreateBoardForm"

const CreateBoard = () => {
  const [submitting, setSubmitting] = useState(false)
  const [board, setBoard] = useState({
    name: '',
    password: ''
  })

  const createBoard = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch('/api/boards/get')
      const data = await response.json()

      console.log(data)
    } catch (err) {
      console.log(err)
    }

    
  }

  return (   
    <div className="flex justify-center items-center">

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