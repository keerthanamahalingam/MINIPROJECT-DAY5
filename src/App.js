import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Login from './Login';
 import Signup from './Signup';
 import About  from './About'
// import Contact from './Contact'
import Home from './Home'
function App() {
  return (
//  <BrowserRouter>
//  <Routes>
//  <Route path="/" element={<Login/>}></Route>
//  <Route path="/Signup" element={<Signup/>}></Route>
//  <Route path="/Login" element={<Login/>}></Route>
//  <Route path="/Home" element={<Home/>}></Route>
//  </Routes>
// </BrowserRouter>
//<div><Home/></div>
 <div><About/></div>
// <div><Contact/></div>
  );
}

export default App;

