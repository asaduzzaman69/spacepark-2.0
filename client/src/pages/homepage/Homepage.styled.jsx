import styled from "styled-components";

export const ClientContainer  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const ClientContent = styled.div`
height: 90vh;
max-width: 1300px;
width: 100%;
background-color: #F9FBFC;
box-shadow: 1px 1px 20px -13px #9ba2ae;
overflow: hidden;
border-radius: 23px;

@media (max-width: 1300px) {
    height: 100vh;
    border-radius: 0px;
  }

`

