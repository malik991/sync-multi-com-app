import React, { Component } from 'react';

import Counter from './counter';


class Counters extends Component {  

    render() { 
      console.log("Counters - Rendered");
      // use Destructring arugment logic
      const {onReset, counterAppObj, onDelete, onIncreament, onDecrement} = this.props;
        
        return (
           <div>
            <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
           
                 {counterAppObj.map(chkCounter1 => 
                    <Counter key={chkCounter1.id}
                     onDelete={onDelete}
                     onIncreament={onIncreament}
                     onDecrement = {onDecrement}
                     counterObj={chkCounter1} /> )}
           </div> 
            );
         }
     
}
 
export default Counters;