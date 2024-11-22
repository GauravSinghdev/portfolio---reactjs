import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App