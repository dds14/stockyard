import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./viewfavorites.css";



export default class ViewFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    }
  }

  // runs when the 'view favorites' button is clicked
  componentDidMount() {
    axios.get("/api/favorites").then((res) => {
      this.setState({
        favorites: res.data
      })
    })
  }

  // removeFavorites = id => {
  //   axios.delete("api/favorites/" + nameId);


  // };


  render() {
    return (
      this.state.favorites.map(favorite => (
        <div class='favorites-div'>
          <h2 class='favorites-name'>{favorite.name}</h2>
          <p class="favorites-ticker">{favorite.ticker}</p>
          <img class="favorites-image" src={favorite.logo}>
          </img>
          <button class="remove-button" onClick={() => {

          }}
          >Remove</button>
          <hr class="favorites-seperator" align="center" width="100%" />
        </div>
      ))
    )
  }
}
