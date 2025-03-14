import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "../../context/NotesContext";
import NoteButton from "./NoteButton";
import styled from "styled-components";

const NoteSlip  = styled.div`
    margin: ${props => props.$full ? "60px" : "20px"};
    padding: ${props => props.$full ? "50px" : "20px"};
    font-family: monospace;
    height: ${props => props.$full ? "1100px" : "520px"};
    width: ${props => props.$full ? "1700px" : "430px"};
    background-color: ${props => props.$color};
    box-shadow: 0.8em 0.8em 0px rgba(15, 15, 15, 0.3);
`;

const NoteTitle = styled.div`
    font-size: ${props => props.$full ? "5em" : "2.5em"};
    font-weight: bold;
    margin-bottom: ${props => props.$full ? "0.4em" : "0.2em"};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const NoteContent = styled.div`
    font-size: ${props => props.$full ? "3.5em" : "2em"};
    margin-bottom: ${props => props.$full ? "0.8em" : "0.2em"};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    word-break: break-all
`;

const NoteFooter = styled.div`
    font-size: ${props => props.$full ? "2em" : "1em"};
    user-select: none;
`;

const NoteTag = styled.div`
    font-size: ${props => props.$full ? "4em" : "2em"};
    text-decoration: underline;
    font-weight: bolder;
    user-select: none;
`;

export default function NoteItem(props) {
    const nav = useNavigate();
    const {deleteNote} = useContext(NotesContext);
    const datetime = new Date(props.note.id).toISOString().split("T");
    const date = datetime[0];
    const time = datetime[1].split(".")[0];

    const viewNoteHandler = () => {
        nav("/view/" + props.note.id);
    };
    const deleteNoteHandler = () => {
        deleteNote(props.note.id);
    };
    const editNoteHandler = () => {
        nav("/edit-note/" + props.note.id)
    };

    const displayCategory = (type) => {
        switch (type) {
            case "school":
                return props.full ? "SCHOOL" : "SCHL";
            case "work":
                return "WORK";
            case "appointment":
                return props.full ? "APPOINTMENT" : "APNT";
            case "urgent":
                return props.full ? "URGENT" : "UGNT";
            default:
                return props.full ? "MISCELLANEOUS" :  "MISC";
        }
    };

    const truncString = (str) => {
        return (str.length > 154 ? str.substring(0, 153) + "…" : str);
    };

    return (
        <>
            <NoteSlip $color={props.bg} $full={props.full}>
                <div class="h-100" style={{position: "relative"}}>
                    <div class="row">
                        <div class="col-7">
                            <NoteTitle $full={props.full}>{props.note.title}</NoteTitle>
                        </div>
                        <div class="col-5 d-flex justify-content-center">
                            {props.full ? (
                                <></>
                            ) : (
                                <div>
                                    <NoteButton click={viewNoteHandler} bi="journal"/>
                                </div>
                            )}
                            <div>
                                <NoteButton click={editNoteHandler} bi="pencil" label={props.full ? "Edit" : null} />
                            </div>
                            <div>
                                <NoteButton click={deleteNoteHandler} bi="trash" label={props.full ? "Delete" : null} />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <NoteContent $full={props.full}>
                                {props.full ? (
                                    props.note.content
                                ) : (
                                    truncString(props.note.content)
                                )}
                            </NoteContent>
                        </div>
                    </div>
                    <div class="row w-100" style={{position: "absolute", bottom: "0", left: "0"}}>
                        <div class="col-4 text-start">
                            <NoteTag $full={props.full}>{displayCategory(props.note.category)}</NoteTag>
                        </div>
                        <div class="col-8 p-0 m-0 text-end">
                            <NoteFooter $full={props.full}>{(!props.note.edited ? "Added on " : "Edited on ") + date}<br />{"at " + time}</NoteFooter>
                        </div>
                    </div>
                </div>
            </NoteSlip>
        </>
    )
}