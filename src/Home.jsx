import React from 'react';
import Header from './Header'
import logo from './img/logo.svg';
import {NavLink} from 'react-router-dom'
import './index.css'
import Tooltip from '@material-ui/core/Tooltip';


const Home = () =>{
    return(
    <>
    <Header/>
  
    <section id="header" className="d-flex align-items-center ">
     <div className="container-fluid ">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                      <h2>Grow your business with<br/> <h1 className="brand-name"> Lahori Developers</h1></h2>
                      <h2 className="my-3">We are the team of talented developer making websites</h2>
                      <div className="mt-3">

                    
                      
                      <Tooltip title="get more info..." aria-label="add">
                      <NavLink to='/services' className="btn btn-outline-primary btn-lg">
                      Get Started
                        </NavLink>
                        </Tooltip>
                        
                        
                      </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                          <img src={logo} alt="logo" className="App-logo"/>
              </div>
              </div>
            </div>
        </div>
    </div>
     </section>
    
    
    </>
    )
}
export default Home;