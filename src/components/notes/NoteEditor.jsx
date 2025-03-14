import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NoteButton from "./NoteButton";

const NoteSlip  = styled.div`
    margin: 60px;
    padding: 50px;
    font-family: monospace;
    height: 1100px;
    width: 1700px;
    background-color: ${props => props.$color};
    box-shadow: 0.8em 0.8em 0px rgba(15, 15, 15, 0.3);
`;

const NoteTitle = styled.input`
    margin: 0;
    padding: 0;
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 0.4em;
    background-color: transparent;
    border: transparent;

    &: focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const NoteContent = styled.textarea`
    height: 672px;
    width: 1600px;
    resize: none;
    font-size: 3.5em;
    margin-bottom: 0.8em;
    background-color: transparent;
    border: transparent;

    &: focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const NoteTag = styled.select`
    font-size: 4em;
    font-weight: bolder;
    background-color: transparent;
    border: transparent;
    appearance: none;

    &: focus {
        outline: none;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const TagOption = styled.option`
    background-color: transparent;
    background: transparent;
    border: transparent;
`;

const NoteFooter = styled.div`
    font-size: 2em;
    user-select: none;
`;

export default function NoteEditor(props) {
    const [note, setNote] = useState({
        title: props.note ? props.note.title : "",
        content: props.note ? props.note.content : "",
        category: props.note ? props.note.category : "",
        id: props.note ? props.note.id : "",
        edited: props.note ? props.note.edited : false
    })
    const datetime = props.note ? new Date(props.note.id).toISOString().split("T") : "";
    const date = props.note ? datetime[0] : "";
    const time = props.note ? datetime[1].split(".")[0] : "";

    const nav = useNavigate();

    const closeHandler = () => {
        nav("/" + props.lastPage);
    };

    const saveHandler = () => {
        console.log(note);
        props.saveFunction(note);
    }

    const changeHandler = (e) => {
        const {name, value} = e.target;
        switch (name) {
            case "title":
                if (value.trim().length > 20)
                    break;
            case "content":
                if (value.trim().length > 400)
                    break;
            default:
                setNote((prevState) => (
                    {
                        ...prevState,
                        [name]: value
                    }
                ));
        }
    };

    return (
        <>
            <NoteSlip $color={props.bg}>
                <div class="h-100" style={{position: "relative"}}>
                    <div class="row">
                        <div class="col-7">
                            <NoteTitle
                                type="text"
                                value={note.title}
                                name="title"
                                onChange={changeHandler}
                                placeholder="Title… (Max 20 chrs)"
                            />
                        </div>
                        <div class="col-5 d-flex justify-content-center">
                            <div>
                                <NoteButton click={saveHandler} bi={props.btnBi} label={props.btnLabel} />
                            </div>
                            <div>
                                <NoteButton click={closeHandler} bi="x-lg" label="Close" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <NoteContent
                                value={note.content}
                                name="content"
                                onChange={changeHandler}
                                maxLength="400"
                                placeholder="Note content… (Max 400 characters)"
                            />
                        </div>
                    </div>
                    <div class="w-100 row" style={{position: "absolute", bottom: "0", left: "0"}}>
                        <div class="col-4 text-start">
                            <NoteTag
                                value={note.category}
                                name="category"
                                onChange={changeHandler}
                            >
                                <TagOption value="">- SELECT TAG -</TagOption>
                                <TagOption value="school">SCHOOL</TagOption>
                                <TagOption value="work">WORK</TagOption>
                                <TagOption value="appointment">APPOINTMENT</TagOption>
                                <TagOption value="urgent">URGENT</TagOption>
                                <TagOption value="misc">MISCELLANEOUS</TagOption>
                            </NoteTag>
                        </div>
                        <div class="col-8 p-0 m-0 text-end">
                            {note.id ? (
                                <NoteFooter>{(!note.edited ? "Added on " : "Edited on ") + date}<br />{"at " + time}</NoteFooter>
                            ) : (
                                <NoteFooter>Vanitas<br />Vanitatum</NoteFooter>
                            )}
                        </div>
                    </div>
                </div>
            </NoteSlip>
        </>
    )
}