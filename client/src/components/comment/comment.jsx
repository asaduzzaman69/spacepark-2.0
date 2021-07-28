import { AlignVertical } from "../../shared-styles/alignment";
import Avatar from "../avatar/avatar"
import { CommentContent, CommentParagraph, CommentUser } from "./comment.styled";

const Comment = () => {
    return ( 
        <AlignVertical style={{margin: '15px 0px', alignItems: 'flex-start'}}>
           <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />

           <CommentContent>
               <CommentUser>Profile Name</CommentUser>
               <CommentParagraph>Comment Details Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis praesentium cumque minima, expedita odio reiciendis, explicabo odit veniam soluta ut deleniti saepe corporis necessitatibus nihil mollitia asperiores. Rem, maxime reprehenderit.</CommentParagraph>
           </CommentContent>
{/*            <FontAwesomeIcon icon={} />
 */}        </AlignVertical>
     );
}
 
export default Comment;
