import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Notfound from './components/Notfound';
import AddUser from './users/AddUser';
import Edituser from './users/Edituser';
import User from './users/User';

function App() {
  return (
    
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path = "/about" element = {<About/>}/>
            <Route exact path = "/contact" element = {<Contact/>}/>
            <Route exact path = "/user/add" element = {<AddUser/>}/>
            <Route exact path = "/user/edit/:id" element={<Edituser/>}/>
            <Route exact path = "/user/:id" element = {<User/>}/>
            <Route element= {<Notfound/>}/>
          </Routes>
         
        </div>
      </Router>
      
   
  );
}

export default App;
