import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';


export const CreateCardWrap = styled.div`
    color: white;
    display: grid;
    height: 366px;
    grid-template-rows: 60px 1fr 60px;
    overflow-wrap: break-word;
    width: 500px;
    grid-template-columns: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 1px 10px #dcdcdccf;

/*     overflow-y: scroll;
 */
`



export const CreateHeader = styled.div`
 display: flex;
 justify-content: space-between;
 background: #34414F;
 padding: 20px;

`


export const EditableText = styled.div.attrs({
    contentEditable:  true
})`
padding: 10px;
color: black;

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