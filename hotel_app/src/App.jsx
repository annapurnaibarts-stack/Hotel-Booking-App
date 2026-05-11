import { useState } from 'react'
import heroImage from './assets/heroImage.png';
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Hero from './components/Hero';
import Home from './pages/Home';
import HotelCard from './components/HotelCard';

function App() {
  const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
      { !isOwnerPath && <Navbar/>}
      <div className='min-h-[70px]' >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
