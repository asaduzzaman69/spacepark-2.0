import styled from "styled-components";



const getButtonVarient = (type) => {

    if(type === 'outlined') {
        return `
        back
        `
    }
}

export const CustomButtonWrapper = styled.button`
border: none;
background-color: ${(props) => props.type === 'outlined' ? 'transparent' : props.theme.colorPrimary};
border: ${(props) => props.type === 'outlined' ? `1px solid ${ props.theme.colorPrimary}` : 'none'}; ;
color: ${(props) => props.bgColor || 'white'};
padding: 13px 22px;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
margin: 0 5px;
width: 100%;

`