import { BottomPart, CreateCardWrap, CreateHeader, Devide, EditableText, PostSvg } from "./create-post.styled";
import CustomButton from './../custom-button/Custom-button'
import { faImage, faLink, faCode, faSmileBeam, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserPost } from "../../redux/reducer/postSlice";


const CreatePost = () => {
  const [postContent,setPostContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    const postObj = {
      creatorId: 'kjbdaskdb',
      postContent
    }
    dispatch(createUserPost(postObj))
  }
  return (
    <CreateCardWrap>

      <CreateHeader>
        Header

        <div>
          <FontAwesomeIcon style={{cursor: 'pointer'}} icon={faTimes} />
        </div>
        </CreateHeader>


      <EditableText onChange={e => setPostContent(e.target.value)}  value={postContent}   />
       

      <BottomPart>
        <div style={{ width: '80px' }}>
          <CustomButton handleClick={handleSubmit}>Post</CustomButton>
        </div>
        <Devide>&nbsp;</Devide>

        <PostSvg icon={faImage} />
        <PostSvg icon={faLink} />
        <PostSvg icon={faCode} />
        <PostSvg icon={faSmileBeam} />
      </BottomPart>
    </CreateCardWrap>
  );
}

export default CreatePost;