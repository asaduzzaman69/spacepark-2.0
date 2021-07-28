import { faCommentAlt, faEllipsisH, faGift, faShare, faSmileBeam, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import Avatar from "../avatar/avatar";
import Dropdown from "../Dropdown-Menu/Dropdown-Menu";
import { AlignPostHeader, PostAction, PostActionItem, PostContainer, PostContent, PostImageContainer, PostCommentBox, PostInputContainer, CommentIconContainer, CommentInput, PostOptionIcon } from "./Post.styled";

const Post = () => {

    const [isOpen,setIsOpen] = useState(false)
    return (
        <PostContainer>
            <AlignVertical style={{
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <AlignVertical>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />
                <AlignPostHeader>
                    <SemiBoldText>Lenny Bell</SemiBoldText>
                    <ThinnerText>12hr Ago</ThinnerText>
                </AlignPostHeader>                    
                </AlignVertical>

                <div style={{position: 'relative'}}>
                <PostOptionIcon onClick={() => setIsOpen(!isOpen)}  icon={faEllipsisH} />
                    <Dropdown isOpen={isOpen} />
                </div>
            </AlignVertical>

            <PostContent>Sooner or later we must realize there is no station, no one place to arrive at once and for all. The true joy of life is the trip
            </PostContent>

            <PostImageContainer>
                <img
                    style={{
                        gridColumn: '1 / 2',
                        gridRow: '1 / -1',
                        height: '100%'
                    }}

                    src="https://cdn.pixabay.com/photo/2021/07/19/20/11/kitten-6479019_960_720.jpg" alt="" width="100%" />
                <img style={{
                    backgroundImage:`url(${'https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223672/150x-1_fnzjp2.jpg'})`
                }} src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223672/150x-1_fnzjp2.jpg" alt="" width="100%" />
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