import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';


export const CreateCardWrap = styled.div`
    color: white;
    background-color: white;
    display: grid;
    min-height: 420px;
    max-height: 70vh;
    height: auto;
    grid-template-rows: 60px minmax(0 ,1fr) 60px;
    overflow-wrap: break-word;
    width: 500px;
    grid-template-columns: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.4s;

`



export const CreateHeader = styled.div`
 display: flex;
 justify-content: space-between;
 background: #34414F;
 padding: 20px;

`


export const EditableText = styled.textarea`
padding: 10px;
color: black;
resize: none;
border: none;
border-bottom:1px solid #e2e2e2 ;

&:focus {
    outline: none;
}

`

export const BottomPart = styled.div`
display: flex;
align-items: center;
padding: 10px;

`

export const Devide = styled.span`
    background: #ded9d9;
    display: inline-block;
    margin-left: 20px;
    margin-right: 10px;
    width: 2px;
`


export const PostSvg = styled(FontAwesomeIcon)`

    display: inline-block;
    margin-right: 14px;
    color: gainsboro;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
       color : #34414F
    }

    &:nth-child(1) {
        margin-left: 5px;
    }
    
    `