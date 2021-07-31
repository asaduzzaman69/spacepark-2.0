import { AlignVertical } from "../../shared-styles/alignment";
import Avatar from "../avatar/avatar"
import { CommentContent, CommentParagraph, CommentUser } from "./comment.styled";

const Comment = ({creator:{displayName}, commentBody}) => {
    return ( 
        <AlignVertical style={{margin: '15px 0px', alignItems: 'flex-start'}}>
           <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />

           <CommentContent>
               <CommentUser>{displayName}</CommentUser>
               <CommentParagraph>{commentBody}</CommentParagraph>
           </CommentContent>
        </AlignVertical>
     );
}
 
export default Comment;
