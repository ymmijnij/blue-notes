import React from "react";
import styled from "styled-components";

const StyledMsg = styled.div`
    margin: 0;
    padding: 0;
    padding-top: 60px;
    height: 100%;
    width: 100%;
    font-family: monospace;
    font-size: 9em;
    font-weight: bold;
    user-select: none;
    white-space: nowrap;
    color:rgb(65, 57, 75);
    filter: drop-shadow(0 0 8px rgb(111, 97, 124));
`;

export default function MsgNotFound(props) {
    const lines = props.msg.split("-");

    return (
        <div class="row row-cols-auto w-100 d-flex justify-content-evenly text-center">
            <StyledMsg>{lines.length > 0 ? (
                lines.map(line => (
                    <>{line}<br /></>
                ))
            ) : (
                <></>
            )}</StyledMsg>
        </div>
    );
}