import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Info from "./components/Info/Info.js";
import Financials from "./components/Financials/Financials";
import FavoriteButtons from "./components/Info/AddToFavorites/FavoriteButtons";
import Randomize from "./components/Info/Randomize/Randomize";
import ViewFavorites from "./components/ViewFavorites/viewfavorites";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favs: "No"
    };
    this.showFavorites = this.showFavorites.bind(this);
  }

  // do the conditional rendering here
  // make a function that sets state when clicking
  // the 'view favorites' button'
  // if the state is clicked, dislay the favorites
  // component, else display the info and financials components

  showFavorites(favs) {
    this.setState({ favs: favs });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button
              className="view-favorites"
              onClick={() => this.showFavorites("Yes")}
            >
              Show My Favorites
            </button>

            {this.state.favs === "No" ? (
              <div>
                <Info />
                <Randomize randomize={this.randomize} />
              </div>
            ) : this.state.favs === "Yes" ? (
              <ViewFavorites />
            ) : (
              <p>This is an error</p>
            )}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
