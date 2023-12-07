'use client'

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

const DeleteBoard = () => {
  const searchParams = useSearchParams()
 
  const boardId = searchParams.get('id')

  return (
    <div className="text-white">
      Delete Board / {boardId}
    </div>
  )
}
export default DeleteBoard