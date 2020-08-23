import React from 'react';
import atta from './attaimg/atta.jpg';
import ars from './attaimg/ars.jpg';
import mol from './attaimg/mol.jpg';
import t2 from './attaimg/t2.jpg';
import tariq from './attaimg/tariq.jpg';
import umar from './attaimg/umar.jpg';
import atta1 from './attaimg/atta1.jpg';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.svg';
import './Gallery.css'


const Gallery = () =>{
    return(
    <>
     <div className="text-center my-5  mx-auto">
                <h1 className="display-4 text-success aaatttaa">
                <img src={logo} alt="logo" className="Applogo"/>
                Gallery</h1>
                <hr className="w-25 mx-auto"></hr><br/>
            </div>
            
           <div className="container">
               <div className="row gy-4 my-4">
               <div className="col-md-4 col-8  col-xxl-4 mx-auto">
                <figure>
                    <img src={atta1} alt="atta" className="img-fluid"/>
                </figure></div>
                <div className="col-md-4 col-8 col-xxl-4 mx-auto">
                <figure>
                    <img src={ars} alt="atta" className="img-fluid"/>
                </figure></div>
                <div className="col-md-4 col-8 col-xxl-4 mx-auto">
                <figure>
                    <img src={mol} alt="atta" className="img-fluid"/>
                </figure>
                </div>
                <div className="col-md-4 col-8 col-xxl-4 mx-auto">
                <figure>
                    <img src={t2} alt="atta" className="img-fluid"/>
                </figure>
                </div>
                <div className="col-md-4 col-8 col-xxl-4 mx-auto">
                <figure>
                    <img src={tariq} alt="atta" className="img-fluid"/>
                </figure>
                </div>
                <div className="col-md-4 col-8 col-xxl-4 mx-auto">
                <figure>
                    <img src={umar} alt="atta" className="img-fluid"/>
                </figure>
                </div>
            

               </div>
           </div>

           <section className="pt-5 my-5 atta">
              <div className="container-fluid">
               <div className="row">
                   <div className="col-xxl-12 col-12 py-2 text-center">
                       <h1 className="text-white kkk">Check out my videos</h1>
                       <p>Never give up on somethings that u can't go a day without thinking about</p>
                       <a href="https://www.youtube.com/watch?v=NIMLv_W3JOw">
                       <button type="button" class="btn btn-outline-success">
                       
                       <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-video" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.667 3.5c-.645 0-1.167.522-1.167 1.167v6.666c0 .645.522 1.167 1.167 1.167h6.666c.645 0 1.167-.522 1.167-1.167V4.667c0-.645-.522-1.167-1.167-1.167H2.667zM.5 4.667C.5 3.47 1.47 2.5 2.667 2.5h6.666c1.197 0 2.167.97 2.167 2.167v6.666c0 1.197-.97 2.167-2.167 2.167H2.667A2.167 2.167 0 0 1 .5 11.333V4.667z"/>
  <path fill-rule="evenodd" d="M11.25 5.65l2.768-1.605a.318.318 0 0 1 .482.263v7.384c0 .228-.26.393-.482.264l-2.767-1.605-.502.865 2.767 1.605c.859.498 1.984-.095 1.984-1.129V4.308c0-1.033-1.125-1.626-1.984-1.128L10.75 4.785l.502.865z"/>
</svg>

                  Watch now</button>
                       </a>
                       <p className="py-4 text-primary">If you want contact us please press the button</p>
                       <NavLink to="/contact">
                       <button type="button" class="btn btn-outline-primary">Contact Now</button>
                       </NavLink>
                   </div>
               </div>
              </div>
            </section>
    </>
    )
}
export default Gallery;