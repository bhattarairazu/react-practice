import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
     
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" exact to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/contact">Contact</Link>
              </li>
            </ul>
            
          </div>
          <Link className="btn btn-primary" to="/user/add">Add User</Link>
        </div>
      </nav>
    )

}

export default Navbar;