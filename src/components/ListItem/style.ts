import styled from 'styled-components';

export const ListItemCss = styled.div(({ done }: { done: boolean }) => `
width: 100%;
padding: 10px;
border-radius: 10px;
margin-bottom: 10px;
background-color: #20212c;
color: #ccc;

label {
    display: flex;
    align-items: center;
}

input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
}

span {
    text-decoration: ${done ? 'line-through' : 'initial'};
}

`
)