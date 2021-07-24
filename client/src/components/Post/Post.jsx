import { AlignVertical } from "../../shared-styles/alignment";
import { Card } from "../../shared-styles/Card";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import Avatar from "../avatar/avatar";
import { AlignPostHeader, PostContent, PostImageContainer } from "./Post.styled";

const Post = () => {
    return (
        <Card style={{
            flexDirection: 'column',
            alignItems: 'self-start'
        }}>
            <AlignVertical>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" />
                <AlignPostHeader>
                    <SemiBoldText>Lenny Bell</SemiBoldText>
                    <ThinnerText>12hr Ago</ThinnerText>
                </AlignPostHeader>
            </AlignVertical>




            <PostContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolores fugit sit nemo ipsam praesentium doloremque facilis tempore porro eaque recusandae exercitationem, repellat eum suscipit.
            </PostContent>

            <PostImageContainer>
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" alt="" width="100%" />
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" alt="" width="100%" />
                <img src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626581897/shutterstock_1218765286_m3s3ua.jpg" alt="" width="100%" />

            </PostImageContainer>



        </Card>
    );
}

export default Post;