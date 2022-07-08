import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock2 from './Clock';
import ChuckNorris from './ChuckNorris';



ReactDOM.render(
  <div>
    <h1>Clocks</h1> <hr></hr>
    <Clock2 continent='Africa' city='Kigali'  dynamic = 'false'/> 
    
    <Clock2 continent='Europe' city='Amsterdam' dynamic = 'false'/> 
    <hr></hr>
    
    <h1>Interactive Clocks</h1> 
    <Clock2 continent='Australia' city='Melbourne' dynamic='true' /> 
    
    <Clock2 continent='Europe' city='Paris' dynamic='true'/> 

    <hr></hr>
    <h1> Chuck Norris Jokes </h1> 
    
    <ChuckNorris />
    
  </div>,

  document.getElementById('root')
);

