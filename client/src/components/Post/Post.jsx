import { faCommentAlt, faGift, faShare, faSmileBeam, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import Avatar from "../avatar/avatar";
import { AlignPostHeader, PostAction, PostActionItem, PostContainer, PostContent, PostImageContainer, PostCommentBox, PostInputContainer, CommentIconContainer, CommentInput } from "./Post.styled";

const Post = () => {
    return (
        <PostContainer>
            <AlignVertical>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />
                <AlignPostHeader>
                    <SemiBoldText>Lenny Bell</SemiBoldText>
                    <ThinnerText>12hr Ago</ThinnerText>
                </AlignPostHeader>
            </AlignVertical>

            <PostContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolores fugit sit nemo ipsam praesentium doloremque facilis tempore porro eaque recusandae exercitationem, repellat eum suscipit.
            </PostContent>

            <PostImageContainer>
                <img
                    style={{
                        gridColumn: '1 / 2',
                        gridRow: '1 / -1',
                        height: '100%'
                    }}

                    src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" alt="" width="100%" />
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223672/150x-1_fnzjp2.jpg" alt="" width="100%" />
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223673/434e3e8b6c88779dd5f68706ca28bfa8_bdwmew.jpg" alt="" width="100%" />

            </PostImageContainer>


            <PostAction>
                <PostActionItem>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span style={{ marginLeft: '7px' }}>Like</span>
                </PostActionItem>
                <PostActionItem>
                    <FontAwesomeIcon icon={faCommentAlt} />
                    <span style={{ marginLeft: '7px' }}>Comment</span>


                </PostActionItem>
                <PostActionItem>
                    <FontAwesomeIcon icon={faShare} />
                    <span style={{ marginLeft: '7px' }}>Share</span>
                </PostActionItem>
            </PostAction>


            <PostCommentBox>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />

                <PostInputContainer>
                    <CommentInput
                    placeholder='write a comments...'
                    
                    />
                    <CommentIconContainer>
                        <li><a><FontAwesomeIcon icon={faSmileBeam} /></a></li>
                        <li><a><FontAwesomeIcon icon={faGift} /></a></li>
                        <li><a><FontAwesomeIcon icon={faSmileBeam} /></a></li>
                    </CommentIconContainer>
                </PostInputContainer>
            </PostCommentBox>


        </PostContainer>
    );
}

export default Post;