import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";



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



  render() {
    return (
      this.state.favorites.map(favorite => (
        <div>
          {favorite.name}
          <img src={favorite.logo}>
          </img>
          {favorite.ticker}
        </div>
      ))
    )
  }
}
