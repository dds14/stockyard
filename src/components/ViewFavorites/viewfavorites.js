import React from "react";
import axios from "axios";
import "./viewfavorites.css";

export default class ViewFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  // runs when the 'show my favorites' button is clicked
  // this is shown on App.js using conditional rendering
  componentDidMount() {
    axios
      .get("/api/favorites")
      .then(res => {
        this.setState({
          favorites: res.data
        });
      })
      .catch(err => console.log("There was an error"));
  }

  removeFavorites = id => {
    axios
      .delete("/api/favorites/" + id)
      .then(res => {
        this.setState({
          favorites: res.data
        });
      })
      .catch(err => console.log("There was an error"));
  };

  render() {
    return this.state.favorites.map(favorite => (
      <div class="favorites-div">
        <h2 class="favorites-name">{favorite.name}</h2>
        <p class="favorites-ticker">{favorite.ticker}</p>
        <img class="favorites-image" src={favorite.logo} />
        <button
          class="remove-button"
          onClick={() => {
            this.removeFavorites(favorite.name);
          }}
        >
          Remove
        </button>
        <hr class="favorites-seperator" align="center" width="100%" />
      </div>
    ));
  }
}
