import React from 'react';
import logo from './img/logo.svg';
import Cardz from './Cardz';
import Sdata from './Sdata'
import './About.css';

const Services = () =>{
  return(
    <>
    <section className=" ">
        <div className=" my-5">
   <h1 className="text-center text-primary Atta-gg">
   <img src={logo} alt="logo" className="App_logo"/>
   Our Services 
   <img src={logo} alt="logo" className="App_logo"/>
    </h1>
   <hr className="w-25 mx-auto"></hr><br/>
      <p className="text-success text-center mx-auto ">Of increasing popularity is your ability to “contract” Dan Purvis for<br/>set amounts of time per week. This means that, for example, our a <br/>will be in your office, work space or wherever you need him to be for <br/>one day per week. You therefore get a virtual marketing director our<br/> communications director for one dedicated day per week plus all the.</p>
   </div>
   <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
             {
               Sdata.map((val,ind) =>{
                return <Cardz
                  imgsrc={val.imgsrc}
                  key={ind}
                  title={val.title}
                />
               })
             }
                </div>
              </div>
              </div>
              </div>
              </section>
    </>
  )
}

export default Services;