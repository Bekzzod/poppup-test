import React, { Component } from 'react';
import './index.css';

import Poppup from './components/Poppup';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogIsOpen: false,
    }
  } 
  render() {
    return (
      <div className="app">
        <button className="app__button" onClick={(e) => this.setState({dialogIsOpen: true})}>
          Нажми на меня!
        </button>
        <Poppup isOpen={ this.state.dialogIsOpen } onClose={(e) => this.setState({dialogIsOpen: false})}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id similique error nulla quis, illum eum quasi modi illo voluptatum repellat quae dolor aliquid eveniet tenetur. Deleniti fuga fugit iusto dicta?
        </Poppup>
      </div>
    )
  }
}