import { Avator } from "./avatar.styled";

const Avatar = ({imageUrl, className}) => {
    return ( 
        <Avator className={className} src={imageUrl} alt="" />
     );
}
 
export default Avatar;