import { Card } from "../../shared-styles/Card";
import { SemiBoldText, ThinnerText } from './../../shared-styles/typography'
import Avatar from "../avatar/avatar";
import { CardContentWrapper } from "./user-card.styled";

const UserCard = () => {
    return ( 
        <Card>
            <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />
            <CardContentWrapper>
                <SemiBoldText>Alexdanra Broke</SemiBoldText>
                <ThinnerText>@alexdanraBroke</ThinnerText>
            </CardContentWrapper>
        </Card>
     );
}
 
export default UserCard;