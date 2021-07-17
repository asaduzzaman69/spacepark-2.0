import { Avator } from "./avatar.styled";

const Avatar = ({imageUrl}) => {
    return ( 
        <Avator src={imageUrl} alt="" />
     );
}
 
export default Avatar;