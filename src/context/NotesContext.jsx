import { createContext } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const NotesContext = createContext();

export function NotesProvider({children}) {
    const [notes, setNotes] = useLocalStorage("notes", []);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((item) => item.id !== id);
        setNotes(updatedNotes);
    };

    const editNote = (note, index) => {
        const updatedNotes = [...notes];
        updatedNotes[index] = note;
        setNotes(updatedNotes);
    };

    return (
        <NotesContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {children}
        </NotesContext.Provider>
    );
}