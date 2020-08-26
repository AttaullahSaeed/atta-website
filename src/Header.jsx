import React from 'react';
import pvg from './attaimg/pvg.svg'
import running from './attaimg/running.svg'
import nature from './attaimg/nature.svg'



const Header= () =>{
    return(
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pvg} className="d-block w-100" alt="ol"/>
    </div>
    <div className="carousel-item">
      <img src={running} className="d-block w-100" alt="meo1"/>
    </div>
    
    <div className="carousel-item">
      <img src={nature} className="d-block w-100" alt="nature"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"/>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only" Next/>
  
</div>

        </>
    )
}
export default Header;
