import React from "react";
import NoteItem from "../notes/NoteItem";
import MsgNotFound from "./MsgNotFound";
import MsgFeedback from "./MsgFeedback";

export default function ListNotes(props) {

    const noteColors = ["#ff8787", "#ff9ce3", "#9cd9ff", "#9cffcc", "#ffde9c"]

    return (
        <div class="container w-100 h-100 m-0 p-0 ">
            <div class="row w-100">
                <div class="col text-center">
                    <MsgFeedback msg={props.title} />
                </div>
            </div>
            <div class="row w-100 row-cols-auto d-flex justify-content-evenly text-center" style={{position: "relative"}}>
                {props.list.length > 0 ? (
                    props.list.map((note) => (
                        <div class="col d-flex justify-content-center text-start">
                            <NoteItem note={note} bg={noteColors[note.id % noteColors.length]} />
                        </div>
                    ))
                ) : (
                    <MsgNotFound msg="There doesn't-seem to be-anything here" />
                )}
            </div>
        </div>
    );
}