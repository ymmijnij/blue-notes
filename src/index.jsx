import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotesProvider } from "./context/NotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <title>Blue Notes</title>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>
);