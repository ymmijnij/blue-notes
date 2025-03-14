import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteEditor from "../components/notes/NoteEditor";
import { useNavigate } from "react-router-dom";

export default function New() {
    const {addNote} = useContext(NotesContext);
    const nav = useNavigate();
    const noteColors = ["#ff8787", "#ff9ce3", "#9cd9ff", "#9cffcc", "#ffde9c"];

    const submitHandler = (note) => {
        if ((note.title = note.title.trim()) && (note.content = note.content.trim()) && note.category) {
            const now = Date.now();
            addNote({
                title: note.title,
                content: note.content,
                category: note.category,
                id: now,
                edited: false
            })
            nav("/view/" + now);
        }
        else
            alert("Couldn't save note! Check for any mistakes!\nAre all the fields filled?\nIs title no longer than 20 characters?\nIs content no longer than 400 characters?");
    };

    return (
        <>
            <NoteEditor bg={noteColors[Date.now() % noteColors.length]} saveFunction={submitHandler} btnBi="plus-square" btnLabel="Create" lastPage="" />
        </>
    );
}