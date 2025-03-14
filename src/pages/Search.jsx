import React, { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import ListNotes from "../components/common/ListNotes";
import NoteEditor from "../components/notes/NoteEditor";

export default function Search() {
    const noteColors = ["#ff8787", "#ff9ce3", "#9cd9ff", "#9cffcc", "#ffde9c"];
    const {notes} = useContext(NotesContext);
    let filtered = [];
    const [filteredList, setFilteredList] = useState(<ListNotes list={filtered} title={`Showing ${filtered.length} result(s).`} />)

    const submitHandler = (note) => {
        if ((note.title = note.title.trim()) || (note.content = note.content.trim()) || note.category) {
            filtered = notes.filter(item => (
                (note.title ? item.title.match(new RegExp(note.title, "i")) != null : true) &&
                (note.content ? item.content.match(new RegExp(note.content, "i")) != null : true) &&
                (note.category ? item.category === note.category : true)
            ));
        }
        setFilteredList(<ListNotes list={filtered} title={`Showing ${filtered.length} result(s).`} />);
    }

    return (
        <div class="d-flex flex-column"> 
            <div>
                <NoteEditor bg={noteColors[Date.now() % noteColors.length]} saveFunction={submitHandler} btnBi="search" btnLabel="Search" lastPage="" />
            </div>
            <div class="row w-100">
                {filteredList}
            </div>
        </div>
    )
};