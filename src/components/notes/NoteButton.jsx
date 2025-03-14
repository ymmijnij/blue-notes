import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    margin-left: ${props => props.$extended ? "0.6em" : "0.3em"};;
    height: ${props => props.$extended ? "2.4em" : "1.2em"};
    width: ${props => props.$extended ? "6.4em" : "1.2em"};
    background-color: transparent;
    border: ${props => props.$extended ? "solid 3px black" : "transparent"};
    border-radius: 2.4em;
    font-size: ${props => props.$extended ? "3em" : "2em"};;
    transition: 0.3s;
    
    &: hover {
        color: white;
        border: ${props => props.$extended ? "solid 3px white" : "transparent"};
    }
`;

export default function NoteButton(props) {
    return (
        <>
            <StyledButton $extended={props.label ? true : false} onClick={props.click}>
                {props.label ? (
                    <div class="container">
                        <div class="row w-100">
                            <div class="col-4 text-center"><i class={"bi bi-" + props.bi}></i></div>
                            <div class="col-8 text-end">{props.label}</div>
                        </div>
                    </div>
                ) : (
                    <i class={"bi bi-" + props.bi}></i>
                )}
            </StyledButton>
        </>
    )
}