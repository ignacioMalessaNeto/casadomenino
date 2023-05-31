import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 120px;
    background-color: #A9A9A9;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > button {
        border-radius: 10px;
        padding: 10px;
        height: 50px;
        background: black;
        border: none;
    }

    a {
        text-decoration: none;
        color: gray;
    }
`;