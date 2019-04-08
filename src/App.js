import React, { Component } from "react";
import "./App.css";
import "./components/Notes/notes.css";
import Info from "./components/Info/Info.js";
import Notes from "./components/Notes/notes";
import Financials from "./components/Financials (unused)/Financials";
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
                <Notes />
              </div>
            ) : this.state.favs === "Yes" ? (
              <div>
                <ViewFavorites />
                <Notes />
              </div>
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
