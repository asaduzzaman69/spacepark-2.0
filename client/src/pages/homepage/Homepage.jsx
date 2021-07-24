import CreatePost from "../../components/create-post/create-post";
import DayImage from "../../components/day-image/DayImage";
import Header from "../../components/header/Header";
import LeftNav from "../../components/navbar/LeftNav";
import RightNav from "../../components/navbar/RightNav";
import Post from "../../components/Post/Post";
import Mainlayout from "../../Layout/MainLayout";
import { ClientContainer, ClientContent } from "./Homepage.styled";

const Homepage = () => {
  return (

    <ClientContainer>
      <ClientContent>
        <Header />

        <Mainlayout
          left={<LeftNav />}
          right={<RightNav />}
          middle={<div>
            <DayImage />

            <Post />


{/*             <CreatePost />
 */}          </div>}
        />

      </ClientContent>
    </ClientContainer>
  );
}

export default Homepage;