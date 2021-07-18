import Header from "../../components/header/Header";
import NavLists from "../../components/NavLists/NavLists";
import PostCard from "../../components/post-card/Post-card";
import RequestCard from "../../components/request-card/request-card";
import UserCard from "../../components/user-card/user-card";
import UserContacts from "../../components/user-contacts/user-contacts";
import { ClientContainer, ClientContent } from "./Homepage.styled";

const Homepage = () => {
    return (

        <ClientContainer>
            <ClientContent>
              <Header />

              <div style={{display: 'flex', height: '100%'}}>
                  <div style={{width: "250px"}}>
                     <UserCard />
                     <NavLists />
                  </div>
                  <div style={{width: '600px', margin: '10px'}}>
                   <PostCard />
                  </div>
                  <div style={{width: "320px"}}>
                    <RequestCard />
                    <br/>
                    <RequestCard />
                    <br />

                    <UserContacts />

                  </div>
              </div>
                
            </ClientContent>
        </ClientContainer>
    );
}

export default Homepage;