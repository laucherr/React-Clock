import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock2 from './Clock';


ReactDOM.render(
  <div>
    <h1>Static Clocks</h1> <hr></hr>
    <Clock2 continent='Africa' city='Nairobi'  dynamic = 'false'/> 
    
    <Clock2 continent='America' city='Chicago' dynamic = 'false'/> 

    <Clock2 continent='Asia' city='Bangkok'  dynamic = 'false'/> 
    
    <Clock2 continent='Pacific' city='Fiji' dynamic = 'false'/>
    <hr></hr>
    
    <h1>Interactive Clocks</h1> 
    <Clock2 continent='Australia' city='Melbourne' dynamic='true' /> 
    
    <Clock2 continent='Europe' city='Paris' dynamic='true'/> 

    <Clock2 continent='Atlantic' city='South_Georgia' dynamic='true' /> 
    
    <Clock2 continent='America' city='Bogota' dynamic='true'/> 
    <hr></hr>
    
  </div>,

  document.getElementById('root')
);

