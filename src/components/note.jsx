import React, { Component } from "react";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {text: props.inputText}
    }

    render() {
        return (
            <div className="note_box">
                <div className="text">
                    <p>{this.state.text}</p>
                </div>
                <button
                className="btn_delete"
                onClick={() => this.props.onDelete(this.props.id)}
                >DELETE!</button>
            </div>
            
        );
    }
}

export default Note;