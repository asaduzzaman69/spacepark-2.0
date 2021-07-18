import Header from "../../components/header/Header";
import NavLists from "../../components/NavLists/NavLists";
import RequestCard from "../../components/request-card/request-card";
import UserCard from "../../components/user-card/user-card";
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
                  <div style={{width: '600px'}}>
                     2
                  </div>
                  <div style={{width: "320px"}}>
                    <RequestCard />
                    <br/>
                    <RequestCard />

                  </div>
              </div>
                
            </ClientContent>
        </ClientContainer>
    );
}

export default Homepage;