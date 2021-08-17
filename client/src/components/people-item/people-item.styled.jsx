import styled from "styled-components";
import CustomButton from "../custom-button/Custom-button";
import {  css } from 'styled-components'


export const PeopleAlign = styled.div`
display: grid;
grid-template-columns: min-content 1fr 140px;
align-items: center;
column-gap: 15px;
background: white;
padding: 20px;
box-shadow: #eef0f4ab 0px -5px 10px 10px;
padding: 0px 20px;
padding-bottom: 15px;
margin-bottom: 15px;
`


export const PeopleItemImage = styled.img`
border-radius: 6px;
width: 60px;
height: 60px;
margin-top: 10px;


`

export const PeopleDescription = styled.span`
margin-top: 6px;
color: #8a97af;
display: inline-block;
font-weight: 500;
`

export const PeopleButton = styled(CustomButton)`
    border-radius: 100px;
    ${(props) => props.postStatus === 'success' && css`
    background-color: #272c2f;
    `}
`