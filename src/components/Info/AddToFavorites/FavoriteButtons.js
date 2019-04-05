import React from "react";
import ReactDOM from "react-dom";
import { data } from "../../Data.js";
import "./FavoriteButtons.css";

export default class FavoriteButtons extends React.Component {
  render() {
    return (
      <div class="addtofavs-div">
        <button onClick={this.props.addToFavorites} class="addtofavs-button">
          Add To Favorites
        </button>
        <button class="viewfavs-button">View Favorites</button>
      </div>
    );
  }
}
