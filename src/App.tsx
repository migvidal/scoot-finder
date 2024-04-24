import RoundedButton from './RoundedButton'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-6xl font-bold text-center px-4'>Find your perfect scooter<span className='text-yellow-600'>!</span></h1>
      <div className='py-10'></div>
      <RoundedButton onClick={() => { }}>Start the survey</RoundedButton>
    </div>
  )
}

export default App
