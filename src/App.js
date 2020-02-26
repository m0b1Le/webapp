import React from 'react';
import Clock from './Clock';
import './App.css';

class App extends React.Component {
  render() {
      return(
          <div className='App'>
              <Clock className='Clock'/>
          </div>
      )
  }
}

export default App;
