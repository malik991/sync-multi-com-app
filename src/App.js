// import logo from './logo.svg';
import React, { Component } from 'react';

import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import React from 'react';

class App extends Component {
  state = {
    checkCounters: [
        {id:1,value:3},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
 };

 // life cycle hook 1 costructor, didmount pass props in cons & in super() than use this.props and intialize the
 // direct state values instead of using this.setstate() coz this.setstate() us used after rendring the method
 constructor()
 {
  super()
  console.log("Constructor - called");
  //this.state = this.props.somthing;
 } 
// second life cycle hook this method i called after our component is render into the DOM.
// and it is perfact place to ajax call to fetch the data from the server.
componentDidMount(){
  //AJAX call i.e get the data of movies from server and pass it
  //this.setState({movieList});
  console.log("App - mounted");
}
// and the third life cycle hook is render method() which is below
 handleDelete = (CounterId) => {
    const counters = this.state.checkCounters.filter(c => c.id != CounterId);
    this.setState({checkCounters: counters});
 };

 handleReset = () =>{
    const resetCounters = this.state.checkCounters.map(c =>
        {
        c.value=0;
        return c;
        });
      this.setState({ checkCounters: resetCounters });
 };

 handleIncreament = counterObj =>
 {
    const updatedCounters = this.state.checkCounters.map(c => {
        if (c.id === counterObj.id) {
            c.value++;
           }
        return c; // For other counters, return the original object
      });
    
      this.setState({ checkCounters: updatedCounters });
    };

 handleDecrement = counterObj =>
 {
    const updatedCounters = this.state.checkCounters.map(c => {
        if (c.id === counterObj.id) {
            if(c.value === 0)
            {
                toast.warn("Cannot decrement. Please select Increment!");
                return c;
            }
            else
            {
                c.value--;
            }
                           
        }
          return c;
        });
        this.setState({ checkCounters: updatedCounters });

};
  render() { 
    console.log("App - Render");
    return (
      <React.Fragment>
        <NavBar TotalCounters = {this.state.checkCounters.filter(c => c.value > 0).length}/> {/**TotalCounters case sensitive */}
        <main className='container'>
          <Counters
          counterAppObj = {this.state.checkCounters}
          onReset = {this.handleReset} 
          onDelete={this.handleDelete}
          onIncreament={this.handleIncreament}
          onDecrement = {this.handleDecrement}
          />
        </main>
        </React.Fragment>
        
    );
  }
}
 
export default App;

