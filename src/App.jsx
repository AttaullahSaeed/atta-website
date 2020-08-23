import React from 'react';
import { Switch, Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Tooltip from '@material-ui/core/Tooltip';
import Footer from './Footer';





const App = () => {
  return (
   <>
   <Navbar/>
   
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route exact path="/about" component={About}/>
   <Route exact path="/services" component={Services}/>
   <Route exact path="/gallery" component={Gallery}/>
   <Route exact path="/contact" component={Contact}/>


   </Switch>
   
<Footer/>
     
        
 </> )
  }
export default App;