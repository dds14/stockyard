import React from 'react'
import ReactDOM from 'react-dom'
import {data} from '../Data.js'
import Randomize from './Randomize/Randomize'

import './Info.css';


export default class Info extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        randomId: 0
      };
  
      this.randomize = this.randomize.bind(this);

    }

    randomize() {
      var randomStock = data[Math.floor(Math.random()*data.length - 1)];
      let finalRandom = randomStock.id;
      // alert(finalRandom);
      this.setState({ randomId: finalRandom })
      // alert(this.state.randomId)
  }

    render () {
      return( 
        <main>
        <div class='name-logo-box'>
        <img class="header-company-logo" src={data[this.state.randomId].companyLogo} alt="logo"/>
       <p class ="header-company-name"> {data[this.state.randomId].companyName} </p>
       <p class ="header-company-ticker"> {"$" + data[this.state.randomId].ticker} </p>
      </div>
      <div class='financials'>
        <aside class="main-left">
            <p class ="industry"> {"Industry: " + data[this.state.randomId].industry} </p>
            <p class ="market-cap"> {"Market Cap: " + data[this.state.randomId].marketCap} </p>
        </aside> 
        <aside class="main-right">
            <p class ="yearly-high"> {"52-Week High: " + data[this.state.randomId].yearlyHigh} </p>
            <p class ="yearly-low"> {"52-Week Low: " + data[this.state.randomId].yearlyLow} </p>
        </aside>
      </div>




      <Randomize randomize={this.randomize} />
      </main>
      )}
  }

