import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Latest from './components/Latest';
import Home from './components/Home';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Questions from './components/Questions';
import Books from './components/Books';

function App() {

  return (
    <main>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          
          <Route path='/Notes' element={<Notes/>}></Route>
          <Route path='/Questions' element={<Questions/>}></Route>
          <Route path='/Books' element={<Books/>}></Route>

          <Route path='/SPLnotes' element={<Latest noteSubject="SPLnotes"/>} />
          <Route path='/ECDnotes' element={<Latest noteSubject="ECDnotes"/>} />
          <Route path='/EFnotes' element={<Latest noteSubject="EFnotes"/>} />
          <Route path='/PHYnotes' element={<Latest noteSubject="PHYnotes"/>} />
          <Route path='/DICnotes' element={<Latest noteSubject="DICnotes"/>} />
          <Route path='/CAFAnotes' element={<Latest noteSubject="CAFAnotes"/>} />
          <Route path='/COMPnotes' element={<Latest noteSubject="COMPnotes"/>} />
          <Route path='/DMnotes' element={<Latest noteSubject="DMnotes"/>} />
          <Route path='/DSAInotes' element={<Latest noteSubject="DSAInotes"/>} />
          <Route path='/DLDnotes' element={<Latest noteSubject="DLDnotes"/>} />
          <Route path='/ELECnotes' element={<Latest noteSubject="ELECnotes"/>} />
          <Route path='/BSnotes' element={<Latest noteSubject="BSnotes"/>} />
          <Route path='/EEnotes' element={<Latest noteSubject="EEnotes"/>} />
          <Route path='/FCMAnotes' element={<Latest noteSubject="FCMAnotes"/>} />
          <Route path='/CGVCnotes' element={<Latest noteSubject="CGVCnotes"/>} />
          <Route path='/OOPnotes' element={<Latest noteSubject="OOPnotes"/>} />
          <Route path='/DEPTnotes' element={<Latest noteSubject="DEPTnotes"/>} />
          <Route path='/LFALTnotes' element={<Latest noteSubject="LFALTnotes"/>} />
          <Route path='/DEPnotes' element={<Latest noteSubject="DEPnotes"/>} />
          <Route path='/DSAIInotes' element={<Latest noteSubject="DSAIInotes"/>} />
          <Route path='/COAnotes' element={<Latest noteSubject="COAnotes"/>} />
          <Route path='/DBMSnotes' element={<Latest noteSubject="DBMSnotes"/>} />
          <Route path='/NMnotes' element={<Latest noteSubject="NMnotes"/>} />
          <Route path='/OSnotes' element={<Latest noteSubject="OSnotes"/>} />
          <Route path='/MMESnotes' element={<Latest noteSubject="MMESnotes"/>} />
          <Route path='/DCnotes' element={<Latest noteSubject="DCnotes"/>} />
          <Route path='/APnotes' element={<Latest noteSubject="APnotes"/>} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}

export default App;
