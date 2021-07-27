import styled from "styled-components";

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