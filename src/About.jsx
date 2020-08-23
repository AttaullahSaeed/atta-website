import React from 'react';
import lhr from './img/lhr.jpg';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './About.css';



const About = () =>{
    return(
        <>
        <section className="main-heading my-5">
            <div className="text-center">
                <h1 className="display-4 text-success Atta-gg">About Us</h1>
                <hr className="w-25 mx-auto"></hr><br/>
            </div>
            <div className="container">
               <div className="row">
                   <div className="col-lg-6 col-md-6 col-12">
                       <figure>
                           <img src={lhr} alt="lhr" className="img-fluid img-lhr"/>
                       </figure>
                   </div>
                   <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-around align-items-start
                    flex-column">
                       <h1 className="text-primary">LAHORE THE HEART OF PAKISTAN</h1>
                       <p>Lahore is the second-largest city of Pakistan and the provincial capital of Punjab. Historically, it is said to be about 2000 years old. In the earliest times, it was a colony of Kangra hill Kingdoms and was a cut-off township on the trade route to Delhi. It had hardly any reputation in the Pre-Muslim era. Lahore came to fame with Islam in South Asia and started being called as the ‘Gardens of the Mughals’ or ‘City of Gardens’, after the significant rich heritage of the Mughal Empire.</p>
                       
                       <button type="button" class="btn btn-outline-primary" data-toggle="tooltip" data-placement="right" title="who am I?..">
                      About us...
           </button>
                    
                    
                   </div>
               </div>
            </div>
        </section>
        </>
    )
}
export default About;