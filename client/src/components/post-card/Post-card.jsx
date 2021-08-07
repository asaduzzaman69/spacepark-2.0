import { AlignVertical } from "../../shared-styles/alignment";
import { Card } from "../../shared-styles/Card";
import { FullWidth } from "../../shared-styles/utils.styled";
import Avatar from "../avatar/avatar";
import { PostInput } from "./post-card.styled";

const PostCard = () => {
    return (
        <Card>
            <AlignVertical style={{
                width: '100%'
            }}>
                <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />

                <FullWidth>
                    <PostInput placeholder="What's on your mind" />
                </FullWidth>
            </AlignVertical>
        </Card>

    );
}

export default PostCard;