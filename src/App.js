import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Info from './components/Info/Info.js'
import Financials from './components/Financials/Financials'
import FavoriteButtons from './components/Info/AddToFavorites/FavoriteButtons';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     {declare_state_variable_here}
  //   }
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Info />
            <Financials />
            <FavoriteButtons />
          </p>
  
        </header>
      </div>
    );
  }
}

export default App;