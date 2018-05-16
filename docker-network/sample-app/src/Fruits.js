import React, { Component } from "react";

export default class Fruits extends Component 
{
   constructor(props) {
      super(props);      
      this.getFruits();
   }

   state = {
      fruits: []
   }

   getFruits = () => {
      fetch('http://localhost:5000/api/fruits', {
         method: 'get',
         headers: {
            accept: 'application/json',
         }
      }).then(response => {
         return response.json();
      }).then(fruits => {
         this.setState({
            fruits: fruits
         })
      });
   }

   render() {
      return (
         <div>
            {
               this.state.fruits.map((fruit, index) => <div key={index}>{fruit}</div>)
            }
         </div>
      )
   }
}