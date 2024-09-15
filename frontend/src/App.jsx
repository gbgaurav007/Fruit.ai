import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import './App.css'
import Home from './components/Home/Home';
import Translator from './components/Translator/Translator';
import SignUp from './components/SignUp/SignUp';

function App() {

  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element= {<SignUp/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/translator' element={<Translator />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}


export default App
