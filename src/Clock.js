/* Clock component in the form of a class
import React from 'react';

//class component
class Clock extends React.Component {
      constructor(props) {
            super(props);
            this.state = {date: new Date()};
      }
      //first lifecycle of two
      //occurs after the first render
      componentDidMount() {
            const dynamic = this.props.dynamic;
            if(dynamic === 'true'){
                  this.timerID = setInterval(
                        () => this.tick(),
                        1000
                  );
            }
      }

      //second lifecycle of two
      componentWillUnmount() {
            const dynamic = this.props.dynamic;
            if(dynamic === 'true'){
                  clearInterval(this.timerID);
            }
      }

      tick() {
            this.setState({
                  date: new Date()
            });
      }
      
      render() {
            const continent = this.props.continent;
            const city = this.props.city;
            const tz = `${continent}/${city}`;
            const dynamic = this.props.dynamic;

            return (
                  
                  <div className = {dynamic === 'true'? 'interactive': 'static'}>
                        <h1>In {continent}, {city.replace('_', ' ')}</h1>
                        <h2>It is {this.state.date.toLocaleString('en-US', { timeZone: tz })}</h2>
                  </div>
            );
      }
}
export default Clock;
*/

/*
//clock component as a function

//import hooks: useState and useEffect
import { useState, useEffect } from "react";

function Clock2(props) {
      //destructuring occurs in the left part of the equal sign
      //the state hook occurs in the right part of the equal sign
      //useState (used in functions) and this.state (used in classes) are similar
      const [currentDate, setCurrentDate] = useState(new Date());

      //lifecycle methods go here (into the effect hook)
      //takes care of side effects such as data fetching(apis), connecting to a database...
      //
      useEffect(() => {
            //creates the timer once
            const timerID = setInterval(() => setCurrentDate(new Date()), 1000);

            //this line is optional
            //cleanup takes place
            //the empty array on the return statement runs both componentDidMount and componentWillUnmount which runs once
            return() => clearInterval(timerID);
      }, []);

      const continent = props.continent;
      const city = props.city;
      const tz = `${continent}/${city}`;

      return (
            <div>
                  <h1>In {continent}, {city.replace('_', ' ')}</h1>
                  <h2>
                        It is {currentDate.toLocaleString('en-US', {timeZone: tz})}
                  </h2>
            </div>
      );
}
export default Clock2;
*/
import React from 'react'
import { useState, useEffect } from "react";

function Clock2(props) {

      const [currentDate, setCurrentDate] = useState(new Date());

      useEffect(() => {
            const dynamic = props.dynamic;
            
            if(dynamic === 'true'){
                  const timerID = setInterval(() => setCurrentDate(new Date()), 1000);

                  return() => clearInterval(timerID);
            }
            
      }, [props.dynamic]);

      const continent = props.continent;
      const city = props.city;
      const tz = `${continent}/${city}`;
      const dynamic = props.dynamic;

      return (
            <div className = {dynamic === 'true'? 'interactive': 'static'}>
                  <h1>In {continent}, {city.replace('_', ' ')}</h1>
                  <h2>
                        It is {currentDate.toLocaleString('en-US', {timeZone: tz})}
                  </h2>
            </div>
      );
}
export default Clock2;
