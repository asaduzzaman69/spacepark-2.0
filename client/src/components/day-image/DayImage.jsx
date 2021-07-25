import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddDayImageAddIconWrapper, AddDayImageButton, DayImageAvatar, DayImageWrap } from "./DayImage.styled";

const DayImage = ({ children }) => {
    return (
        <div style={{
            position: 'relative',
            marginRight: '15px'
        }}>
            {children}
            <DayImageWrap src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" />
        </div>
    );
}


export const DayImageUser = () => (
    <DayImageAvatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />

)

export const DayImageButton = () => {
    return (
        <AddDayImageButton>
            <AddDayImageAddIconWrapper>
                <FontAwesomeIcon icon={faPlus} />
            </AddDayImageAddIconWrapper>
            <strong>Add Story</strong>
        </AddDayImageButton>
    )
}

export default DayImage;