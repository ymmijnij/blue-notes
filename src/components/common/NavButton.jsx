import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    padding-left: 50px;
    font-family: monospace;
    height: 2em;
    width: 100%;
    background-color: transparent;
    border: transparent;
    font-size: 3em;
    transition: 0.4s;
    overflow: hidden;
    white-space: nowrap;
    color: rgb(218, 200, 255);
    
    &: hover {
        color: rgb(56, 51, 68);
        background-color: rgb(218, 202, 255);
    }
`;

export default function NavButton(props) {
    return (
        <>
            <StyledButton onClick={props.click}>
                <div class="container text-start">
                    <div class="row w-100">
                        <div class="col-3"><i class={"bi bi-" + props.bi}></i></div>
                        <div class="col-9">{props.label}</div>
                    </div>
                </div>
            </StyledButton>
        </>
    )
}