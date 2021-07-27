import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CustomButton from "../custom-button/Custom-button";



export const Header = styled.header`
background-color: ${({theme}) => theme.bgWhite};
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 10px;
border-bottom: 1px solid #ece9e9;
/*     box-shadow: -1px 3px 15px #80808040;
 */`
export const HeaderContent = styled.div`
display: flex;
align-items: center;
`



/* Temporary Search */


export const SearchInput = styled.input`
border: none;
background: #F4F6FA;
/* background: ${({theme}) => theme.bgMain};
 */
border-radius: 10px;
z-index: -11;
padding: 10px 41px;
width: 200px;

&:focus {
    outline: none;

}
`

export const IconSvg = styled(FontAwesomeIcon)`
    z-index: 2222;
    position: absolute;
    top: 10px;
    left: 12px;
    color: inherit;

`


export const HeaderButton = styled(CustomButton)`
margin: 0px 12px
`