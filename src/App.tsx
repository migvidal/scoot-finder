import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl font-bold'>Find your perfect scooter<span className='text-yellow-600'>!</span></h1>
      <a href="#" className='text-blue-600'>Link</a>
    </>
  )
}

export default App
