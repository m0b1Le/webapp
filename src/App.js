import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Grid from './components/layout/Grid';
import Pressure from './components/pages/Converter/Pressure';
import Temperature from './components/pages/Converter/Temperature';
import Weight from './components/pages/Converter/Weight'


class App extends React.Component {
  render() {
      return(
        <Router>
          <div className='app'>
             <Header />
             <Route exact path="/" render={props => (
               <React.Fragment>
                 <Grid />
               </React.Fragment>
             )} />              
             <Route path="/pressure" component={Pressure} />
             <Route path="/temperature" component={Temperature} />              
             <Route path="/weight" component={Weight} />              
          </div>
        </Router>
      )
  }
}

export default App;
