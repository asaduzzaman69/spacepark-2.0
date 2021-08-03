import { BottomPart, CreateCardWrap, CreateHeader, Devide, EditableText, PostSvg } from "./create-post.styled";
import CustomButton from './../custom-button/Custom-button'
import { faImage, faLink, faCode, faSmileBeam, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserPost } from "../../redux/reducer/postSlice";


const CreatePost = ({ isOpen }) => {
  const [postContent, setPostContent] = useState('');
  const [postImages, setPostImages] = useState();
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => state.user)

  const handleSubmit = () => {
    const postObj = {
      creator: currentUser._id,
      postContent
    }
    dispatch(createUserPost(postObj))
  }

  const handleFile = () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.click();
    input.onchange = e => {
      console.log(e, input.files)
      let files = Array.from(input.files);
      setPostImages(URL.createObjectURL(e.target.files[0]))
    };
  }



  return (
    <CreateCardWrap isOpen={isOpen}>

      <CreateHeader>
        Header

        <div>
          <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTimes} />
        </div>
      </CreateHeader>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'scroll',
    }}>
    <EditableText onChange={e => setPostContent(e.target.value)} value={postContent} />

<img style={{
  width: '100%',
  height: '250px'
}} src={postImages}  /> 
    

    </div>

      <BottomPart>
        <div style={{ width: '80px' }}>
          <CustomButton handleClick={handleSubmit}>Post</CustomButton>
        </div>
        <Devide>&nbsp;</Devide>

        <PostSvg onClick={() => handleFile()} type='file' icon={faImage} />
        <PostSvg icon={faLink} />
        <PostSvg icon={faCode} />
        <PostSvg icon={faSmileBeam} />
      </BottomPart>
    </CreateCardWrap>
  );
}

export default CreatePost;