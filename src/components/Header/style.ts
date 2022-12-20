import styled from "styled-components";

export const StyleHeader = styled.header`
width: 100%;
max-width: 1000px;
height: 100px;
display: flex;
align-items: center;
margin: auto;

span {
    font-weight: bold;
    color: #ffffff;
    background-color: #2a9d8f;
    padding: 5px 10px;
    font-size: 25px;
    border-radius: 6px;
}

@media (max-width: 1000px) {
    padding-left: 20px;
}

`