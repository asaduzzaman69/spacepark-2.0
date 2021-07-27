import { Label } from "../../shared-styles/typography";
import { Bubble } from "../../shared-styles/utils.styled";
import RequestCard from "../request-card/request-card";
import UserContacts from "../user-contacts/user-contacts";

const RightNav = () => {
    return ( 
        <div>
            <Label> request <Bubble type="primary">2</Bubble></Label>
           <RequestCard />
            <br />
            <RequestCard />
            <br />

            <Label> contacts <Bubble>4</Bubble></Label>

            <UserContacts />       
             </div>
     );
}
 
export default RightNav;