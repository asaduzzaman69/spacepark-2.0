import { DayImageAvatar, DayImageWrap } from "./DayImage.styled";

const DayImage = () => {
    return ( 
        <div style={{
            position: 'relative'
        }}>
            <DayImageAvatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />
            <DayImageWrap src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" />
        </div>
     );
}
 
export default DayImage;