// redux 
import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

// styled component
import { Label, NoContent } from "../../shared-styles/typography";
import { Bubble } from "../../shared-styles/utils.styled";

// Reusable component
import RequestCard from "../request-card/request-card";
import UserContacts from "../user-contacts/user-contacts";

const RightNav = () => {
    const { currentUser } = useSelector(state => state.user);
    return ( 
        <div>
            <Label> request <Bubble type="primary">{currentUser && currentUser.friendRequest && currentUser.friendRequest.length}</Bubble></Label>
            {
                currentUser.friendsReq && currentUser.friendsReq.length > 0 ?( currentUser.friendsReq.map(el => <RequestCard {...el} /> )) :  <NoContent>No request so far</NoContent> 
            } 
            <Label> contacts <Bubble>4</Bubble></Label>
            <UserContacts />       
        </div>
     );
}
 
export default RightNav;