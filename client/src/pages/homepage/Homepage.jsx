import CreatePost from "../../components/create-post/create-post";
import DayImage from "../../components/day-image/DayImage";
import Header from "../../components/header/Header";
import LeftNav from "../../components/navbar/LeftNav";
import RightNav from "../../components/navbar/RightNav";
import NavLists from "../../components/NavLists/NavLists";
import PostCard from "../../components/post-card/Post-card";
import RequestCard from "../../components/request-card/request-card";
import UserCard from "../../components/user-card/user-card";
import UserContacts from "../../components/user-contacts/user-contacts";
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
         middle={<div>            <CreatePost />
          </div>}
    />

      </ClientContent>
    </ClientContainer>
  );
}

export default Homepage;