import React, { Component, Fragment } from "react";
import Note from "./note";
import PopUp from "./popup";
import {Link, useRoutes} from "react-router-dom"

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [ //default inputs
                {id: 1, text: 'Add a Note!', details: 'First Sample', seen: false},
                {id: 2, text: 'Add a Second Note!', details: 'Second Sample', seen: false}
            ],
            new_note_text : ""
        }
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    togglePop (note) {
        let noteId = note.id
        let notes = this.state.notes

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId) {
                notes[i].seen = !notes[i].seen //flip true false
            }
        }
        
        this.setState({
            notes: notes
        });
    };

    checkToggle (noteId) {
        let notes = this.state.notes
        
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id == noteId) {
                if (notes[i].seen == true) {
                    return true
                }
                else {
                    return false
                }
            }
        } 

        return false
    }
    
    handleDelete (noteId) {
        const notes = this.state.notes.filter((c) => c.id !== noteId);
        this.setState({ notes: notes });
    };

    handleAdd (event) {
        event.preventDefault(); //prevents page from refreshing whenever you click it it prevents 
        //default action submit which sends request to server and refreshes
        let last_id = this.state.notes[this.state.notes.length - 1].id
        let notes = this.state.notes
        //notes = notes.concat([{id: last_id + 1, text: this.state.new_note_text}])
        notes.push({id: last_id + 1, text: this.state.new_note_text, details: 'empty', seen: false})
        this.setState({ notes: notes, new_note_text: "" })
    }

    handleChange(event) {
        this.setState({new_note_text: event.target.value});
    }
    

    render () {
        return (
            <div className = "Overall">
                <div className = "notes_div"> {/* encapsulates the rows of notes */}
                {this.state.notes.map((note) => (
                    <div className = "Row"> 
                        <Note
                        key={note.id}
                        id={note.id}
                        inputText={note.text}
                        onDelete={this.handleDelete}
                        //onDelete={onDelete} implement later 
                        />
                        {/*This is how you pass variable into it can't put it in other side or doesn't work*/}
                        <div className="btn">
                            <button 
                            onClick={() => this.togglePop(note)} 
                            >Activate Details</button>
                        </div>
                        {/*Checks to see if true, if true, shows modal*/}
                        {this.checkToggle(note.id) ? <PopUp details = {note.details} toggle={() => this.togglePop(note)} /> : null}

                        <div>
                            <li>
                                <Link to = {`${this.returnRoute.url}/{note.id}`}>Link to it</Link>
                            </li>
                        </div>      
                    </div>
                ))}
                </div>
                <div className = "control_bar">
                    <form>
                        <label>
                            New Note:
                            <input type="text" value={this.state.new_note_text} onChange={this.handleChange} />
                        </label>
                        <button 
                        className = "btn_add"
                        onClick = {this.handleAdd}
                        >Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Container)