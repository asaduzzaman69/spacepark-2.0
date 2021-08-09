import { useEffect, useState } from "react";

//Fontawesome
import { faCommentAlt, faEllipsisH, faGift, faShare, faSmileBeam, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styled Component
import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import { AlignPostHeader, PostAction, PostContainer, PostContent, PostImageContainer, PostCommentBox, PostInputContainer, CommentIconContainer, CommentInput, PostOptionIcon } from "./Post.styled";

// redux
import { useSelector } from 'react-redux';

//Reusable Component 
import Avatar from "../avatar/avatar";
import Comment from "../comment/comment";
import Dropdown from "../Dropdown-Menu/Dropdown-Menu";
import Spinner from "../spinner/spinner";
import PostItem from "../post-item/post-item";

// API
import { ApiCore } from './../../services/api/core'



const Post = ({ creator, postContent, _id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [commentActives, setCommentActives] = useState([]);
    const [commentBody, setCommentBody] = useState('');
    const [commentsData, setCommentsData] = useState({ isFetching: false, isError: false, comments: [] });
    const { comments, isFetching } = commentsData;


    const { _id: creatorId } = useSelector(state => state.user.currentUser)
    const API = new ApiCore({ getAll: true, createOne: true });

    const handleSubmit = async () => {
        await API.createOne(`posts/${_id}/comments`, {
            commentBody,
            creator: creatorId,
            postId: _id
        })

        setCommentBody('')

    }

    const handleComment = () => {
        if (!showComment) {
            setCommentActives([...commentActives, 'comments'])
        }
        else {
            const newComments = commentActives.filter(el => el !== 'comments');
            setCommentActives(newComments)
        }
        setShowComment((showComment) => !showComment);

    }

    const handleLike = () => {

    }


    useEffect(() => {

        if (!showComment || comments.length > 0) return;

        // Otherwise Fetch Comment about this post

        (async () => {

            // I am using local Database. In order to mimic remote database behaiviour, I set this SetTimeout. will be removed before it goes live
            setCommentsData({ ...commentsData, isFetching: true })
            setTimeout(async () => {
                const comments = await API.getAll(`posts/${_id}/comments`);
                setCommentsData({ ...commentsData, comments: comments.data.comments })
            }, 2000)

        })()

    }, [showComment])
    return (
        <PostContainer>
            <AlignVertical style={{
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <AlignVertical>
                    <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />
                    <AlignPostHeader>
                        <SemiBoldText>{creator?.displayName}</SemiBoldText>
                        <ThinnerText>12hr Ago</ThinnerText>
                    </AlignPostHeader>
                </AlignVertical>

                <div style={{ position: 'relative' }}>
                    <PostOptionIcon onClick={() => setIsOpen(!isOpen)} icon={faEllipsisH} />
                    <Dropdown isOpen={isOpen} />
                </div>
            </AlignVertical>

            <PostContent>{postContent}
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
                    backgroundImage: `url(${'https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223672/150x-1_fnzjp2.jpg'})`
                }} src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223672/150x-1_fnzjp2.jpg" alt="" width="100%" />
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1627223673/434e3e8b6c88779dd5f68706ca28bfa8_bdwmew.jpg" alt="" width="100%" />

            </PostImageContainer>
            <PostAction>
                <PostItem
                    text="Like"
                    icon={faThumbsUp}
                    handleToggle={handleLike}

                />
                <PostItem
                    text="Comment"
                    icon={faCommentAlt}
                    handleToggle={ handleComment}
                    isActive={commentActives.includes('comments')}
                />
                <PostItem
                    text="Share"
                    icon={faShare}


                />

            </PostAction>


            <PostCommentBox>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />

                <PostInputContainer>
                    <CommentInput
                        onChange={(e) => setCommentBody(e.target.value)}
                        value={commentBody}
                        placeholder='write a comments...'
                        onKeyPress={e => e.key === 'Enter' && handleSubmit()}

                    />
                    <CommentIconContainer>
                        <li><a><FontAwesomeIcon icon={faSmileBeam} /></a></li>
                        <li><a><FontAwesomeIcon icon={faGift} /></a></li>
                        <li><a><FontAwesomeIcon icon={faSmileBeam} /></a></li>
                    </CommentIconContainer>
                </PostInputContainer>
            </PostCommentBox>

            {

                showComment && (
                    <>

                        {
                            isFetching ? (
                                <>
                                    <Spinner />
                                </>
                            )
                                : comments.length ? (
                                    <>
                                        {
                                            comments.map(el => <Comment {...el} />)

                                        }
                                    </>

                                ) : <h5 style={{
                                    margin: '15px auto',
                                    color: '#a3a5ab',
                                    fontSize: '15px'
                                }}>No comments for this posts</h5>

                        }


                    </>
                )

            }



        </PostContainer>
    );
}

export default Post;