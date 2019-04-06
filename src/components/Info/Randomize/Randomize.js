import React from "react";
// import ReactDOM from 'react-dom'
// import {data} from '../../Data.js'
import "./Randomize.css";

export default function Randomize(props) {
  return (
    <div class="randomize-div">
      <button onClick={props.randomize} class="randomize-button">
        Randomize
      </button>
    </div>
  );
}
