import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import logo from './img/logo.svg';
import { NavLink } from 'react-router-dom';
import './nav.css';


const Navbar = () =>{
  return(
    <>
     
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <NavLink className="navbar-brand janu" to="/">
    <img src={logo} alt="logo" className="App_logo"/>
    Lahori Developers </NavLink>
   
    <button className="navbar-toggler" type="button" data-toggle="collapse"
     data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" 
    aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Tooltip title="Home Page" aria-label="add">
          <NavLink  activeClassName="menu_active" exact  className="nav-link active"  aria-current="page" to="/">Home</NavLink>
          </Tooltip>
        </li>
        <li className="nav-item">
        <Tooltip title="about page" aria-label="add">
          <NavLink  activeClassName="menu_active"  className="nav-link active"  to="/about">About</NavLink>
          </Tooltip>
        </li>
        <li className="nav-item">

        <Tooltip title="services page" aria-label="add">
          <NavLink  activeClassName="menu_active"   className="nav-link active" to="services">Services</NavLink>
          </Tooltip>
        </li>
        <li className="nav-item">

        <Tooltip title="gallery page" aria-label="add">
          <NavLink  activeClassName="menu_active"  className="nav-link active"  to="/gallery">Gallery</NavLink>
          </Tooltip>
        </li>
        <li className="nav-item">

        <Tooltip title="contact uss page" aria-label="add">
          <NavLink  activeClassName="menu_active"  className="nav-link active"  to="/contact">Contact</NavLink>
          </Tooltip>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;