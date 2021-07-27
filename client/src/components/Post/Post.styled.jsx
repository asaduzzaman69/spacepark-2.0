import styled from "styled-components";
import { AlignVertical } from "../../shared-styles/alignment";
import { Card } from "../../shared-styles/Card";
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
column-gap: 15px;
row-gap: 15px;

  & > img {
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`


export const PostContainer = styled(Card)`

flex-direction: column;
align-items: flex-start;
margin: 25px 0px;
padding: 20px 25px
 
`


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

&:hover {
  background: #F2F2F2;
}

`



// Comment Box component Style    

export const PostCommentBox = styled.div`
display: flex;
width: 100%;
margin-top: 15px;
`


export const PostInputContainer = styled.div`
flex: 1;
display: flex;
background: #eef0f4;
border-radius: 19px;

`



// Comment Icon & Icon wrapper


export const CommentInput = styled.input`
  flex: 1;
  background:transparent;
  border: none;
  padding: 0px 15px;

  &:focus {
    outline: none;
  }
`

export const CommentIconContainer = styled.ul`

display: flex;
align-items: center;

& > li {
  margin: 4px;
  cursor: pointer;
}
& > li:nth-child(3) {
  margin-right: 15px;
}

`