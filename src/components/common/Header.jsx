import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavButton from "./NavButton";

const HomeButton = styled.button`
    margin: 0;
    padding: 30px;
    width: 100%;
    font-family: courier;
    font-weight: bold;
    background-color: transparent;
    border: transparent;
    font-size: 5em;
    transition: 0.3s;
    color: rgb(230, 218, 255);
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    
    &: hover {
        color:rgb(110, 63, 211);
    }
`;

export default function Header() {
    const nav = useNavigate();

    const searchNoteHandler = () => {
        nav("/search");
    };

    const addNoteHandler = () => {
        nav("/new-note");
    };

    const homeHandler = () => {
        nav("/");
    };

    return (
        <div class="container p-0 h-100" style={{backgroundColor: "#252030", boxShadow: "5px 0px 5px #151020", maxWidth: "650px"}}>
            <HomeButton onClick={homeHandler}><i class="bi bi-house-door"></i>BlueNotes</HomeButton>
            <hr style={{border: "5px solid rgb(166, 148, 212)", margin: "10px 20px 40px 20px", borderRadius: "5px"}} />
            <NavButton click={addNoteHandler} bi="journal-plus" label="New note" />
            <NavButton click={searchNoteHandler} bi="filter-square" label="Filter notes" />
        </div>
    )
}