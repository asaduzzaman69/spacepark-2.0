import styled from "styled-components";
import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText } from "../../shared-styles/typography";


export const AlignPostHeader = styled(AlignVertical)`
flex-direction: column;
align-items: flex-start;
margin-left: 15px;
`

export const PostContent = styled(SemiBoldText)`

margin: 20px 0px;
font-size: 14px;
font-weight: 600;
line-height: 22px;
`

export const PostImageContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
`