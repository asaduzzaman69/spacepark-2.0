import styled from "styled-components";


export const SemiBoldText = styled.h5`
font-size: 16px;
color: ${({theme}) => theme.textSecondary};
margin: 5px 0px;
`

export const ThinnerText = styled.h6`
font-size:12px;
color: ${({theme}) => theme.textGrey};
font-size: 13px;
/* color: #8C98A8;
 */font-weight: 500;
`


export const Label = styled.h6`
display: flex;
justify-content: space-between;
font-size: 14px;
text-transform: uppercase;
margin: 15px 7px;
color: #A4B0BF;

`