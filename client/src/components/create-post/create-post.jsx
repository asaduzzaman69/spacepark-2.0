import { BottomPart, CreateCardWrap, CreateHeader, Devide, EditableText, ImageCross, PostSvg } from "./create-post.styled";
import CustomButton from './../custom-button/Custom-button'
import { faImage, faLink, faCode, faSmileBeam, faTimes, faCross } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserPost } from "../../redux/reducer/postSlice";
import useClickOutside from "../../shared-hooks/useClickOutside";


const CreatePost = ({ isOpen, handleToggle }) => {
/*   const [ clickRef ] = useClickOutside();
  console.log(clickRef) */

  const [postContent, setPostContent] = useState('');
  const [postImages, setPostImages] = useState('');
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
      setPostImages(URL.createObjectURL(e.target.files[0]))
    };
  }

  let gridTemplateRows = '';

  if (!postImages) {
    gridTemplateRows = '1fr'
  } else {
    gridTemplateRows = '1fr 80px'

  }



  return (
    <CreateCardWrap isOpen={isOpen}>

      <CreateHeader>
        Header
        <div onClick={handleToggle} >
          <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTimes} />
        </div>
      </CreateHeader>

      <div style={{
        display: 'grid',
        gridTemplateRows,
        height: '100%',
      }}>
        <EditableText onChange={e => setPostContent(e.target.value)} value={postContent} />
        <div style={{
          padding: '2px 12px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 140px)'

        }}>
          {
            postImages !== '' && (
              <div style={{
                display: 'flex',
                position: 'relative'
              }}>

                <img style={{
                  width: '100%',
                  height: '100%'
                }} src={postImages} />

                <ImageCross onClick={() => setPostImages('')}>
                  <FontAwesomeIcon icon={faTimes} />
                </ImageCross>

              </div>
            )
          }
        </div>

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