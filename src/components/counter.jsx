import React, { Component } from 'react';

class Counter extends Component {
        // anonther life cycle hook ComponentDidUpdate
        componentDidUpdate(prevProps,preState){
            // here we check either our previous props is changed or not ?
            // if change than call the #AJAX and get data from server
            console.log("Preprops: ",prevProps);
            console.log("Prestate: ",preState);
            if(prevProps.counterObj.value != this.props.counterObj.value)
            {
                //AJAX will call the server for data ( optimization)
            }    
        }

        componentWillUnmount(){
            // we call unmount when a component delete so all its listnere and handler will unmount from here
            // otherwise they will remain in memory and result memory leak
            console.log("Counter - Unmount!");
        }

        render() { 
        console.log("Child Counter - Rendered");
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.displayCounter()}</span>
                <button onClick={() => this.props.onIncreament(this.props.counterObj)} className='btn btn-secondary btn-sm m-2'>Increament</button>
                <button 
                onClick={() => this.props.onDecrement(this.props.counterObj)} 
                className='btn btn-secondary btn-sm m-2'>
                Decrement
                </button>
                <button onClick={() => this.props.onDelete(this.props.counterObj.id)} className='btn btn-danger btn-sm m-2'>Delete</button>

            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counterObj.value == 0 ? "warning" : "primary";
        return classes;
    }
    displayCounter(){        
        const {value} = this.props.counterObj;
        return value == 0 ? 'zero' : value;
    }
}
 
export default Counter;