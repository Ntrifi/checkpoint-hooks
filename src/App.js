import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Trailer from './Trailer'
import Home from './Home'
import Index from "./components/Home/Index"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path='/' element={<Index />}></Route>
          <Route path="/trailer/:id" element={<Trailer />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
