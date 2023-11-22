import Link from "next/link"

export default function Home() {
  
  return (
   <div className="flex flex-col justify-center items-center">
      <Link
        href="/about"
        className="absolute right-10 top-5 text-primary text-4xl hover:underline"
      >About</Link>
      <h1 className=" text-primary text-8xl mt-20 mb-10 ">Welcome to Jeopardy!</h1>
      
      <div className="flex flex-col text-center">
        <Link
          href="/boards/create"
          className="primary-button mb-10"
        >Create Board</Link>
        <Link
          href="/boards"
          className="primary-button"
        >Discover Boards</Link>
      </div>
  

   </div>
  )
}

// text-center mt-20