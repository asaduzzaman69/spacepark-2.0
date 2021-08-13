// Core Component
import DayImagePreview from "../../components/day-image-preview/Day-Image-preview";
import PostCard from "../../components/post-card/Post-card";
import PostPreview from "../../components/post-preview/post-preview";

const Homepage = () => {
    return (
        <div>
{/*             <Modal
                isOpen={isPostModalOpen}
                handleToggle={() => dispatch(toggle())}
            >
                <CreatePost handleToggle={() => dispatch(toggle())} />
            </Modal> */}
            <DayImagePreview />
            <PostCard />
            <PostPreview />
        </div>
    );
}

export default Homepage;