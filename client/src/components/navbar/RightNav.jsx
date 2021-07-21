import RequestCard from "../request-card/request-card";
import UserContacts from "../user-contacts/user-contacts";

const RightNav = () => {
    return ( 
        <div>
           <RequestCard />
            <br />
            <RequestCard />
            <br />

            <UserContacts />        </div>
     );
}
 
export default RightNav;