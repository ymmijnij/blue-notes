import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteEditor from "../components/notes/NoteEditor";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
    const {notes, editNote} = useContext(NotesContext);
    const params = useParams();
    console.log(params.id)


    const nav = useNavigate();
    const noteColors = ["#ff8787", "#ff9ce3", "#9cd9ff", "#9cffcc", "#ffde9c"];

    const i = notes.findIndex(item => item.id == params.id);
    const note = notes[i];
    console.log(note);

    const submitHandler = (note) => {
        if ((note.title = note.title.trim()) && (note.content = note.content.trim()) && note.category) {
            const now = Date.now();
            editNote({
                title: note.title,
                content: note.content,
                category: note.category,
                id: now,
                edited: true
            }, i)
            nav("/view/" + now);
        }
        else
            alert("Couldn't save note! Check for any mistakes!\nAre all the fields filled?\nIs title no longer than 20 characters?\nIs content no longer than 400 characters?");
    };

    return (
        <>
            <NoteEditor note={note} bg={noteColors[params.id % noteColors.length]} saveFunction={submitHandler} btnBi="floppy" btnLabel="Save" lastPage={"view/" + params.id} />
        </>
    );
}