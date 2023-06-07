import React from 'react'
import { Players } from '../shared/ListOfPlayers'
import { useState } from 'react'
export default function Player() {
   const [player, setPlayer] = useState([]);
  return (
     <div className='container'>
   {Players.map(player => (
      <div className='column'>
         <div className='card'>
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className='title'>{player.club}</p>
            <p>
               <button onClick={() => {setPlayer(player);}}>
                <a href="#popup1" id="openPopUp">Detail</a>
              </button>
            </p>
         </div>
      </div>
   ))}
      <div id='popup' className='overlay'>
         <div className='popup'>
            <img src={player.img}/>
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
               {player.info}
            </div>
         </div>
      </div>
   </div>
   )
   }

// import React from 'react'
// import { Players } from './shared/ListOfPlayers'
// export default class Player extends React.Component {
//    render() {
//       return (
//          <div className='container'>
//             {Players.map(Player => (
//                <div className='column'>
//                   <div className='card'>
//                      <img src={Player.img} />
//                      <h3>{Player.name}</h3>
//                      <p className='title'>{Player.club}</p>
//                      <p><button>detail</button></p>
//                   </div>
//                </div>
//             ))}
//          </div>
//       )
//    }
// }


