import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography"
import Avatar from "../avatar/avatar"
import { UserContactListAlign ,UserSemiBoldText} from "./userContactList.styled";

const UserContactList = () => {
    return (
        <UserContactListAlign>
            <AlignVertical>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />
                <UserSemiBoldText>Amaanda Miles</UserSemiBoldText>
            </AlignVertical>

            <FontAwesomeIcon icon={faEllipsisH} />
        </UserContactListAlign>
    );
}

export default UserContactList;