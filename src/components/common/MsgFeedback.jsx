import React from "react";
import styled from "styled-components";

const StyledMsg = styled.div`
    margin: 0;
    padding: 0;
    padding-bottom: 40px;
    height: 100%;
    width: 100%;
    font-family: monospace;
    font-size: 3.5em;
    font-weight: bold;
    user-select: none;
    white-space: nowrap;
    color: rgb(230, 209, 255);
`;

export default function MsgFeedback(props) {
    const lines = props.msg.split("-");

    return (
        <>
            <StyledMsg>{props.msg}</StyledMsg>
        </>
    );
}