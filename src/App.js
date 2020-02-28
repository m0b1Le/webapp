import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter, Router, Route } from "react-router-dom";
import './App.css';


class App extends React.Component {
  render() {
      return(
          <div className='App'>
             <Header />               
          </div>
      )
  }
}

export default App;
