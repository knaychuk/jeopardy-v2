import '@styles/globals.css'

export const metadata = {
  title: 'Jeopardy',
  description: 'Create Jeopardy boards to play with friends and family!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-OpenSans font-bold'>{children}</body>
    </html>
  )
}
