
import React from 'react'
export default function Navigation() {
 return ( 
                <nav className='nav'>
                    <ul className="navigation">
                        <li><a className="active nav-ele" href="#home">Home</a></li>
                        <li><a className="nav-ele" href="#news">News</a></li>
                        <li><a className="nav-ele" href="#about">About</a></li>
                        <li><a className="nav-ele" href="#contract">Contract</a></li>
                    </ul>
                </nav>
            
 )
}



// import React, {Component} from "react";
// export default class Navigation extends Component{
//     render(){
//         return(
//             <div>
//                 <nav className='nav'>
//                     <ul className="navigation">
//                         <li><a className="active nav-ele" href="#home">Home</a></li>
//                         <li><a className="nav-ele" href="#news">News</a></li>
//                         <li><a className="nav-ele" href="#about">About</a></li>
//                         <li><a className="nav-ele" href="#contract">Contract</a></li>
//                     </ul>
//                 </nav>
//             </div>
//         )
//     }
// }