import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NotesContext } from "../context/NotesContext";
import { useParams } from "react-router-dom";
import NoteItem from "../components/notes/NoteItem";
import MsgNotFound from "../components/common/MsgNotFound";

export default function View() {
    const {id} = useParams();
    const {notes} = useContext(NotesContext);
    const note = notes.find(note => note.id == id);
    const noteColors = ["#ff8787", "#ff9ce3", "#9cd9ff", "#9cffcc", "#ffde9c"];

    return (
        <>
            {note ? (
                <NoteItem bg={noteColors[note.id % noteColors.length]} note={note} full={true} />
            ) : (
                <MsgNotFound msg="Note not found" />
            )}
        </>
    )
}