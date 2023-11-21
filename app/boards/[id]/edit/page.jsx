'use client'

import { useEffect, useState } from 'react'

const EditBoard = ({ params }) => {
  const [password, setPassword] = useState('')
  const [boards, setBoards] = useState(null)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    setVerified(false)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`/api/getBoards/checkPassword`)
      const data = await response.json()
      
      if(response.ok) {
        setBoards(data)
        setVerified(true)
      }

    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      {verified &&
        <div>{boards.map((board) => (
          <div key={board._id}>{board._id}{board.title}Board</div>
        ))}</div>
        
      }
      {/* Submit Password Here */}
      {!verified &&
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div>
          <button type='submit' className='bg-white text-black'>
            Submit
          </button>
        </div>
      </form>
      }

    </div>
  )
}
export default EditBoard