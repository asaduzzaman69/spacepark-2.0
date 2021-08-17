import styled from "styled-components";




export const CustomButtonWrapper = styled.button`
border: none;
background-color: ${(props) => props.type === 'outlined' ? 'transparent': props.type === 'clear' ? 'transparent' : props.theme.colorPrimary};
border: ${(props) => props.type === 'outlined' ? `1px solid ${ props.theme.colorPrimary}` : 'none'}; ;
color: ${(props) =>  props.type === 'clear' ? 'grey' : props.bgColor || 'white'};
backface-visibility: hidden;
padding: 13px 22px;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
margin: 0 5px;
width: 100%;
font-family: inherit;
text-transform: capitalize;
transition: all 0.1s;

&:active {
    transform: scale(.9);
}

`