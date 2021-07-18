import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const ListItem = styled.li`
position: relative;
padding: 10px;

&::before {
    content: '';
    width: 80%;
    height: 1px;
    background: ${({theme}) =>  theme.bgMain};
    position: absolute;
    top: 51px;
    left: 23px;
}

`

export const ListLink = styled.a`
display: inline-block;
padding: 5px 0px;
`

export const ListItemText = styled.span`
font-size: 15px;
margin: 0px 10px;
color: currentColor;
font-weight: bold;
`


export const ListIcon = styled(FontAwesomeIcon)`
color: currentColor;
margin-left: 15px;
`