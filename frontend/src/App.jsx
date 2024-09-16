import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login'
import './App.css'
import Home from './components/Home/Home';
import Translator from './components/Translator/Translator';
import SignUp from './components/SignUp/SignUp';
import FAQPage from './components/Faq/FAQPage';
import ChatbotApp from './components/ChatBot/ChatBotApp';
import AboutPage from './components/About/About';

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
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/chatbot' element={<ChatbotApp />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}


export default App
