import styled from 'styled-components';

export const AppCss = styled.div`

header {
    color: #fff;
    border-bottom: 1px solid #444;
    text-align: center;
    padding: 10px 0px 20px 0px;
}

nav {
    display: flex;
    border: 1px solid #555;
    border-radius: 15px;
    width: 100%;
    padding: 10px;
    margin: 20px 0px;

    div {
        font-size: 40px;
        color: #fff;
        margin-right: 5px;
        cursor: pointer;
    }

    input {
        width: 100%;
        font-size: 18px;
        color: #fff;
        border: 0;
        outline: 0;
        background-color: transparent;
    }
}
`