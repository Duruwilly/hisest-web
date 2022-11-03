import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "./responsive.css";
import "./scrollbar.css";
import "./style.css";
import Home from './pages/Home'
import Navbar from './components/Navbar';
import jQuery from 'jquery';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import { ScrollToTop } from './components/ScrollToTop';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop2 from './components/ScrollToTop2';

function App() {
  const [loader, setLoader] = useState(true)

  setTimeout(() => {
    setLoader(false)
  }, 3500)

  if (loader) return <div className="preloader">
        <div className="loader"></div>
    </div>
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ScrollToTop2 />
      <Footer />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
