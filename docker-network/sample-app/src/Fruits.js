import React, { Component } from "react";

export default class Fruits extends Component 
{
   constructor(props) {
      super(props);
   }

   state = {
      fruits: []
   }

   componentDidMount() {
      this.getFruits();
   }

   getFruits = () => {      
      fetch('http://localhost:9090/api/fruits', {
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