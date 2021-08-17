import styled, { keyframes } from "styled-components";

export const FullWidth =  styled.div`
width: 100%;
`

const getBubbleCss = ({type}) => {

    if(type === 'primary') {
        return `
        background: ${({theme}) => theme.colorPrimary}
        
        `
    } else if (type === 'danger') {
        return `
        background: #F8FAFB;
        `
    }


    return `
    background: #ACB9C9;

    `
}

export const Bubble = styled.span`
    background: #1778f2;
    padding: 5px;
    border-radius: 100%;
    height: 13px;
    width: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    ${getBubbleCss}

`


const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
border: 4px solid #f3f3f3;
border-radius: 50%;
border-top: 4px solid #3498db;
width: 15px;
height: 15px;
-webkit-animation: spin 2s linear infinite;
-webkit-animation: spin 2s linear infinite;
animation: spin 2s linear infinite;
margin: auto;
animation: ${rotate} 2s linear infinite;

`