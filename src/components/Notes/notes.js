import React from "react";
import axios from "axios";
import "./notes.css";



export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            userInput: "",
            showNote: false,
            editHandleChange: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitNote = this.submitNote.bind(this);
        this.changeNote = this.changeNote.bind(this);
        this.editHandleChange = this.editHandleChange.bind(this);
        this.toggleInput = this.toggleInput.bind(this);

    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    editHandleChange(val) {
        this.setState({ editHandleChange: val })
    }



    submitNote() {
        axios.post("/api/notes", { note: this.state.userInput })
    }

    changeNote(id) {
        axios.put("/api/notes/" + id);
    }

    toggleInput() {
        this.setState({ showNote: true })
    }

    componentDidMount() {
        axios.get("/api/notes").then((res) => {
            this.setState({
                notes: res.data
            })
        })
    }

    render() {
        const { notes, showNote } = this.state
        const viewNotes = notes.map(note => {
            return (
                <div>
                    <p onClick={() => this.toggleInput()}>{note.note}</p>
                    {showNote ?
                        <div>
                            <input onChange={(event) => {
                                this.editHandleChange(event.target.value)
                            }}></input>
                            <button onClick={() => {
                                this.changeNote(note.id)
                            }}>Edit</button>
                        </div> : null}
                </div>
            )
        })
        return (
            <div class='notes-box'>
                <h3>Notes</h3>
                <input onChange={(event) => {
                    this.handleChange(event.target.value)
                }}></input>
                <button onClick={() => {
                    this.submitNote()
                }}>Submit</button>
                {viewNotes}

            </div>
        )
    }
}

