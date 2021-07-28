import styled from "styled-components";


export const CommentContent = styled.div`
    background: #F0F2F5;
    padding: 5px 12px;
    border-radius: 10px;
`


export const CommentUser = styled.span`
color: ${({theme}) => theme.textSecondary };
font-weight: 600;
margin-bottom: 5px;
margin-top: 3px;
display: inline-block;
`

export const CommentParagraph = styled.p`
font-size: 15px;
line-height: 1.4;
color: #3a3a3a;
`