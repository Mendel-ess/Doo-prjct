import './styles/App.css'
import { Routes, Route} from 'react-router-dom'
import { Registrar } from './pages/Registrar'
import { Homepage } from './pages/Homepage'
import Navbar from './Components/Navbar'

function App() {


  return (
    <div className="App">
      <Routes>
        <Navbar/>
        <Route path='/' element={<Homepage />}/>
        <Route path='/registrar' element={<Registrar/>}/>
        <Route path='/peliculas' element={<Registrar/>}/>
        <Route path='/series' element={<Registrar/>}/>
        <Route path='/login' element={<Registrar/>}/>
      </Routes>
    </div>
  )
}

export default App
