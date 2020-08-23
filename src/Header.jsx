import React from 'react';
import ol from './img/ol.jpg';
import meo1 from './img/meo1.jpg';
import meo3 from './img/meo3.jpg';



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
      <img src={ol} className="d-block w-100" alt="ol"/>
    </div>
    <div className="carousel-item">
      <img src={meo1} className="d-block w-100" alt="meo1"/>
    </div>
    
    <div className="carousel-item">
      <img src={meo3} className="d-block w-100" alt="meo3"/>
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
