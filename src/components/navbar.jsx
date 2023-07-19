import React, { Component } from 'react';

// statless functional component used when just we return a function and use props just it.
// use destructring argument mean no need of this.props every time like ({argument})
// life cycle hook methods only used in classes not in fucntion
const NavBar = ({TotalCounters}) =>{
    console.log("NavBar - Rendered");
     return (
            <nav className="navbar navbar-light bg-light">
                <a className='navbar-brand' href='#'> Navbar
                    <span className='badge badge-pill badge-secondary m-2'>
                        {TotalCounters} {/** this.props.TotalCounter in func we can't use it we have to get paratmeter */}
                    </span> 
                    </a>
            </nav>
        );
};

// class NavBar extends Component {
     
//     render() { 
       
//     }
// }
 
export default NavBar;