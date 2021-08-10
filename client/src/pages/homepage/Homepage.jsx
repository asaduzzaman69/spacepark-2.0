import DayImagePreview from "../../components/day-image-preview/Day-Image-preview";
import Header from "../../components/header/Header";
import LeftNav from "../../components/navbar/LeftNav";
import RightNav from "../../components/navbar/RightNav";
import PostCard from "../../components/post-card/Post-card";
import PostPreview from "../../components/post-preview/post-preview";
import Mainlayout from "../../Layout/MainLayout";
import Modal from "../../components/Modal/Modal";
import { ClientContainer, ClientContent } from "./Homepage.styled";
import CreatePost from "../../components/create-post/create-post";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/reducer/postSlice";

const Homepage = () => {
  const { isPostModalOpen } = useSelector(state => state.post)
  const dispatch = useDispatch()

  return (

    <ClientContainer>
      <ClientContent>
        <Header />



        <Mainlayout
          left={<LeftNav />}
          right={<RightNav />}
          middle={<div>
            <Modal
              isOpen={isPostModalOpen}
              handleToggle={() => dispatch(toggle())}
            >
              <CreatePost handleToggle={() => dispatch(toggle())} />
            </Modal>
            <DayImagePreview />
            <PostCard />
            <PostPreview />

            {/*             <Post />
 */}

            {/*             <CreatePost />
 */}          </div>}
        />

      </ClientContent>
    </ClientContainer>
  );
}

export default Homepage;