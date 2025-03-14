import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import ListNotes from "../components/common/ListNotes";

export default function Home() {
    const {notes} = useContext(NotesContext);

    return (
        <>
            <ListNotes list={notes} title={"My notes (" + notes.length + ")"} />
        </>
    );
}