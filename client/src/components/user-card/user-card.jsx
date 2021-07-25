import { Card } from "../../shared-styles/Card";
import { SemiBoldText, ThinnerText } from './../../shared-styles/typography'
import Avatar from "../avatar/avatar";
import { CardContentWrapper } from "./user-card.styled";
import { useSelector } from 'react-redux'

const UserCard = () => {
    const {displayName,tagName} = useSelector(state => state.user.currentUser)
/*     console.log(currentUser)
 */    return ( 
        <Card style={{
            marginBottom: '25px'
        }}>
            <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />
            <CardContentWrapper>
                <SemiBoldText>{displayName}</SemiBoldText>
                <ThinnerText>{tagName}</ThinnerText>
            </CardContentWrapper>
        </Card>
     );
}
 
export default UserCard;