import React, { Component } from "react";
import Note from "./note";

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [ //default inputs
                {id: 1, text: 'Add a Note!'},
                {id: 2, text: 'Add a Second Note!'}
            ]
        }
      }

    handleDelete = (noteId) => {
        const notes = this.state.notes.filter((c) => c.id !== noteId);
        this.setState({ notes });
    };
    

    render () {
        return (
            <div className = "Overall">
                {this.state.notes.map((note) => (
                    <div className = "Row">
                        <Note
                        key={note.id}
                        id={note.id}
                        inputText={note.text}
                        onDelete={this.handleDelete}
                        //onDelete={onDelete} implement later 
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Container