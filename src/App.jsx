import Navbar from './Components/Navbar'
import { Routes, Route} from 'react-router-dom'
import { Registrar } from './pages/Registrar'
import { Homepage } from './pages/Homepage'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/login' element={<Registrar/>}/>
      </Routes>
    </div>
  )
}

export default App
