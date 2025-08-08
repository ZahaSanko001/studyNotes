import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Latest from './components/Latest';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {

  return (
    <main>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/latest" element={<Latest/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}

export default App;
