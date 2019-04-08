import React from "react";
import axios from "axios";
import "./viewfavorites.css";



export default class ViewFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  // runs when the 'submit' button is clicked
  componentDidMount() {
    axios.get("/api/favorites").then((res) => {
      this.setState({
        favorites: res.data
      })
    })
  }

  removeFavorites = id => {
    axios.delete("/api/favorites/" + id).then((res) => {
      this.setState({
        favorites: res.data
      })
    })
  };


  render() {
    return (
      this.state.favorites.map(favorite => (
        <div class='favorites-div'>
          <h2 class='favorites-name'>{favorite.name}</h2>
          <p class="favorites-ticker">{favorite.ticker}</p>
          <img class="favorites-image" src={favorite.logo}>
          </img>
          <button class="remove-button" onClick={() => {
            this.removeFavorites(favorite.name)
          }}
          >Remove</button>
          <hr class="favorites-seperator" align="center" width="100%" />
        </div>
      ))
    )
  }
}
