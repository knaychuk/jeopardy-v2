import '@styles/globals.css'

export const metadata = {
  title: 'Jeopardy',
  description: 'Create Jeopardy boards to play with friends and family!',
}

export default function Layout({ children }) {
  return (
    
    <html lang="en">
      <head>
        <link href="https://db.onlinewebfonts.com/c/43cbe0c4070437c1a6417c2b28d66fae?family=Gyparody" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/f0f756b6ccf210d313ae8fbea7d198a7?family=Swiss911+XCm+BT" rel="stylesheet" type="text/css"/> 
      </head>
      <body className='font-Jeopardy font-bold bg-secondary'>{children}</body>
    </html>
  )
}
