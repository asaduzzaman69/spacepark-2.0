import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostActionItem } from "./post-item.styled";

const PostItem = ({ isActive = false, text = '', icon, handleToggle = () => { } }) => {
    return (
        <PostActionItem isActive={isActive} onClick={handleToggle}> 
            {
                icon && (<FontAwesomeIcon icon={icon} />)
            }

            <span style={{ marginLeft: '7px' }}>{text}</span>
        </PostActionItem>
    );
}

export default PostItem;