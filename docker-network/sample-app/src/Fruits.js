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
      fetch('http://sample-api/api/fruits', {
         method: 'get',
         headers: {
            accept: 'application/json',
         }
      }).then(response => {
         console.log("FIRST ATTEMPT WORKED");
      }).catch(error => {
         console.log("FIRST ATTEMPT FAILED");
         console.log(error);
      })

      fetch('http://sample-api:9090/api/fruits', {
         method: 'get',
         headers: {
            accept: 'application/json',
         }
      }).then(response => {
         console.log("SECOND ATTEMPT WORKED");
      }).catch(error => {
         console.log("SECOND ATTEMPT FAILED");
         console.log(error);
      })         
      // })
      // fetch('http://localhost:9090/api/fruits', {
      //    method: 'get',
      //    headers: {
      //       accept: 'application/json',
      //    }
      // }).then(response => {
      //    return response.json();
      // }).then(fruits => {
      //    this.setState({
      //       fruits: fruits
      //    })
      // });
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