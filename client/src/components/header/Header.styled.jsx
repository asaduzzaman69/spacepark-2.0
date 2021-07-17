import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";



export const Header = styled.header`
background-color: ${({theme}) => theme.bgWhite};
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 10px;
    border-bottom: 1px solid #ece9e9;
    box-shadow: -1px 3px 15px #80808040;
`
export const HeaderContent = styled.div`
display: flex;
align-items: center;
`



/* Temporary Search */


export const SearchInput = styled.input`
border: none;
background: ${({theme}) => theme.bgMain};

    border-radius: 10px;
    z-index: -11;
    padding: 10px 41px;

&:focus {
    outline: none;

}
`


export const IconSvg = styled(FontAwesomeIcon)`

    z-index: 2222;
    position: absolute;
    top: 10px;
    left: 12px;


`
