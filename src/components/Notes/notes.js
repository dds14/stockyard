import React from "react";
import axios from "axios";
import "./notes.css";



export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    // // runs when the 'view favorites' button is clicked
    componentDidMount() {
        axios.get("/api/notes").then((res) => {
            this.setState({
                notes: res.data
            })
        })
    }

    render() {
        return (
            <div class='notes-box'>
                <h3>Notes</h3>
                <input></input>
                <button>Submit</button>
                <p>{this.state.notes}</p>
            </div>
        )
    }
}

