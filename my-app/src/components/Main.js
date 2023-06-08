import React, { Component } from 'react'
import { Players } from './shared/ListOfPlayers'
import PlayersPresentation from './PlayersPresentation';
import Player from './Player';
export class Main extends Component {
  constructor() {
    super();
    this.state = {
     players: Players
    };
  }
 render() {
  return <Player players={this.state.players}/>
 }
}
export default Main