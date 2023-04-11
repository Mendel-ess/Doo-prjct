import Navbar from './Components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={ Homepage }/>
        <Route exact path='/login' element={<Registrar/>}/>
      </Routes>
    </div>
  );
}

export default App; 
