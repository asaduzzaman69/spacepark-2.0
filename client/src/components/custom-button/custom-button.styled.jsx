import styled from "styled-components";


export const CustomButtonWrapper = styled.button`
border: none;
background-color: ${(props) => props.type === 'outlined' ? 'none' : props.theme.colorPrimary};
padding: 13px 22px;
border-radius: 10px;
font-weight: bold;
cursor: pointer;
color: white;
margin: 0 12px;

`