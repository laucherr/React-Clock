import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

function ChuckNorris(props) {
      const url = 'https://api.chucknorris.io/jokes/random';

      //setting the state variable
      const[posts, setPosts] = useState([]);

      const fetchPost = async() => {
            
            const response = await axios(url)
            
            //update the state
            setPosts(response.data);
            
      }
      
      useEffect(() => {
            fetchPost();
      }, []);

      return (
            <div className="App">
                  <p> {posts.value} </p>
                  <button onClick={fetchPost} > Get New Fact </button>
            </div>
      );
      
}
export default ChuckNorris;
