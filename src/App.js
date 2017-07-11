import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Students from './Students';
import ReduxStudents from './containers/ReduxStudents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReduxStudents />
      </div>
    );
  }
}

export default App;
