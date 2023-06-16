import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Login from './Components/Login/Login';
import Forget from './Components/Forget/Forget';
import HomePage from './Components/HomePage/HomePage';


const App = () => {
  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forget" element={<Forget />} />
          </Routes>
          <Footer/>
        </Router>    
    </div>
  )
}

export default App
