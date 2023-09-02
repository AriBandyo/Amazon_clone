import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} >
            <Route index element={<Header />} />
          </Route>
          <Route path="/" element={<Home />} >
            <Route index element={<Header />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

