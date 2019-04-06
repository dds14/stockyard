import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { data } from "../Data.js";
import Randomize from "./Randomize/Randomize";
import FavoriteButtons from "./AddToFavorites/FavoriteButtons";

import "./Info.css";

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomId: 1
    };

    this.randomize = this.randomize.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
  }

  /* This is just a function that generates a random number.
    It is then used to choose a random ID from the list of stocks. */
  randomize() {
    var randomStock = data[Math.floor(Math.random() * (data.length - 2))];
    let finalRandom = randomStock.id;
    this.setState({ randomId: finalRandom });
  }

  addToFavorites() {
    let favorites = {
      logo: data[this.state.randomId].companyLogo,
      name: data[this.state.randomId].companyName,
      ticker: data[this.state.randomId].ticker
    };
    axios.post("/api/favorites", favorites).then(response => {
      console.log(favorites);
    });
  }

  render() {
    return (
      <main>
        <div class="name-logo-box">
          <img
            class="header-company-logo"
            src={data[this.state.randomId].companyLogo}
            alt="logo"
          />
          <p class="header-company-name">
            {" "}
            {data[this.state.randomId].companyName}{" "}
          </p>
          <p class="header-company-ticker">
            {" "}
            {"$" + data[this.state.randomId].ticker}{" "}
          </p>
        </div>
        <div class="financials">
          <aside class="main-left">
            <p class="industry">
              {" "}
              {"Industry: " + data[this.state.randomId].industry}{" "}
            </p>
            <p class="market-cap">
              {" "}
              {"Market Cap: " + data[this.state.randomId].marketCap}{" "}
            </p>
          </aside>
          <aside class="main-right">
            <p class="yearly-high">
              {" "}
              {"52-Week High: " + data[this.state.randomId].yearlyHigh}{" "}
            </p>
            <p class="yearly-low">
              {" "}
              {"52-Week Low: " + data[this.state.randomId].yearlyLow}{" "}
            </p>
          </aside>
        </div>
        {/* <Randomize randomize={this.randomize} /> */}
        <FavoriteButtons addToFavorites={this.addToFavorites} />
      </main>
    );
  }
}
