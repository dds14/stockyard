import React from 'react'
import ReactDOM from 'react-dom'
import {data} from '../Data.js'
import './Financials.css';




export default class Hello extends React.Component {
    render () {
      return <div class='financials'>
        {/* <aside class="main-left">
            <p class ="industry"> {"Industry: " + data[0].industry} </p>
            <p class ="market-cap"> {"Market Cap: " + data[0].marketCap} </p>
        </aside> 
        <aside class="main-right">
            <p class ="yearly-high"> {"52-Week High: " + data[0].yearlyHigh} </p>
            <p class ="yearly-low"> {"52-Week Low: " + data[0].yearlyLow} </p>
        </aside> */}
      </div>
    }
  }