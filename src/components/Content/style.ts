import styled from "styled-components";

export const Area = styled.section`
width: 100%;
max-width: 1000px;
display: flex;
margin: auto;

div, section {
    flex: 1;
}

@media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px 20px;
}

`

export const SL = styled.div`
h1 {
    margin: 0;
    font-size: 40px;
    color: #394b5c;
    font-weight: bold;
}

p {
    margin: 25px 0px;
    font-size: 16px;
    color: #6a7d8b;
    text-align: center;
}

input {
    width: 100%;
    margin-bottom: 25px;
    border: 0;
    border-bottom: 2px solid #6a7d8b;
    padding: 5px 2px;
    outline: none;
}

button {
    background-color: #2a9d8f;
    font-size: 16px;
    color: #ffffff;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    transition: all ease-in-out .2s;

    &:hover {
        color: #ffffff;
        background-color: #3bae9f;
    }
}
`

export const SR = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin-left: 80px;

article {
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

&.df {
display: flex;
justify-content: center;
align-items: center;
height: 100%;

    article {
        width: 100%;
        height: 100%;
        padding: 40px;
    }

    i, h4 {
        font-size: 50px;
    }

    span, p {
        color: #ffffff;
        font-size: 25px;
    }

    .bi-arrow-left-circle {
        font-size: 75px;
        position: absolute;
        z-index: 99;
        width: 100px;
        height: 100px;
        left: -10px;
        background-color: #2a9d8f;
        filter: brightness(100%);
        padding: 0;
    }
}

@media (max-width: 1000px) {
    margin: 0;
    margin: 30px 0px;
}

@media (max-width: 455px) {
    grid-template-columns: 1fr;
}
`