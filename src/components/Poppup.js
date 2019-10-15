import React, {Component} from 'react';

import './Poppup.css';

export default class Poppup extends Component {
  render() {
    let Poppup = (      
      <div className="poppup">
        <button className="poppup__button" onClick={ this.props.onClose }>x</button>
        <div className="poppup__text">{ this.props.children }</div>
      </div>
    );

    if (!this.props.isOpen) {
      Poppup = null;
    }

    return (
      <div>
        { Poppup }
      </div>
    )
  }
}