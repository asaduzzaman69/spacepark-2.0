import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const ListItem = styled.li`
position: relative;
padding: 10px;
color: #BDC4D4;

&::before {
    content: '';
    width: 80%;
    height: 1px;
    background: ${({theme}) =>  theme.bgMain};
    position: absolute;
    top: 55px;
    left: 23px;
}

`

export const ListLink = styled(NavLink)`
display: inline-block;
padding: 10px 0px;
color: #B5BFCB;

`

export const ListItemText = styled.span`
font-size: 15px;
margin: 0px 10px;
color: currentColor;
font-weight: bold;
color: #53647D;
`


export const ListIcon = styled(FontAwesomeIcon)`
color: currentColor;
margin-left: 15px;

`