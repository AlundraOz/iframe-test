import React, { Component } from 'react';
import { render } from 'react-dom';
import IframeComponent from './IframeComponent';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <IframeComponent src="https://angular-todolist-materialui.stackblitz.io/" height="100%" width="45%"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
