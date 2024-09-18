import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './css/App.css'
import Home from './Home.jsx'
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function App() {
  
    return (
      <>
        <Header />
        <BrowserRouter >
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/projects' element={<Projects />}/>
        </Routes>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
  
  export default App