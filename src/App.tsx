import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import RoundedButton from './RoundedButton'
import HomeScreen from './screens/HomeScreen'
import WeightScreen from './screens/WeightScreen'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Link to="/">ScootFinder</Link>
      </div>
      <Routes>
        <Route
          path='/'
          element={
            <HomeScreen>
              <Link to="/weight"
                className='rounded-md rounded-tr-2xl rounded-br-2xl bg-yellow-300 dark:bg-yellow-600 px-4 py-2'
                >Begin
              </Link>
            </HomeScreen>
          }
        >
        </Route>
        <Route path='/weight' element={<WeightScreen />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
