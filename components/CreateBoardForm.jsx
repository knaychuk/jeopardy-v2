'use client'

import { useState } from "react"

const CreateBoardForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name, password)
  }

  return (
    <div className="mt-[8rem]">
      <form onSubmit={handleSubmit} className="create-board-form flex flex-col">
        <label>Name your board:</label>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Set a password:</label>
        <input 
          type="text" 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Continue</button>
      </form>
    </div>
  )
}
export default CreateBoardForm