import styled, { css } from "styled-components"

export const PostAction = styled.div`
width: 100%;
display: flex;

border-top: 1px solid #CED0D4;
border-bottom: 1px solid #CED0D4;
padding: 5px 0px;
margin-top: 10px;
color: #a3a5ab;
`

export const PostActionItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
padding: 10px;
border-radius: 5px;
margin-right: 10px;
transition: all 0.2s ;
cursor: pointer;
${({isActive}) => isActive === true && css`
color: ${({theme}) => theme.colorPrimary};
` }

&:hover {
  background: #F2F2F2;
}

`

