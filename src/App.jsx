import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { Navbar } from './components/navbar/Navbar';





function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/abouts' element={<AboutPage />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;