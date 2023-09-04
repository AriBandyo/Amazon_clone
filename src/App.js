import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import {auth} from './firebase';

function App() {


  //LISTENER
  useEffect(() => {
    // This code will run when the App component loads

    auth.onAuthStateChanged(authUser =>{
      console.log("THE USER IS >>>",authUser);
      
      if(authUser){
        //the user just logged in / the user was logged in
      }else{
        //user is logged out

      }
      
    })


  }, []);



  
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

