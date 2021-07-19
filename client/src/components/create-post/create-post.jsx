import { BottomPart, CreateCardWrap, CreateHeader, Devide, EditableText, PostSvg } from "./create-post.styled";
import CustomButton from './../custom-button/Custom-button'
import { faImage, faLink, faCode, faSmileBeam, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const CreatePost = () => {
  const [postContent,setPostContent] = useState('')
  return (
    <CreateCardWrap>

      <CreateHeader>
        Header

        <div>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        </CreateHeader>


      <EditableText  onInput={(e) => setPostContent(e.target.innerHTML)} dangerouslySetInnerHTML={{__html: postContent}} / >
       
       

      <BottomPart>
        <div style={{ width: '80px' }}>
          <CustomButton>Post</CustomButton>
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