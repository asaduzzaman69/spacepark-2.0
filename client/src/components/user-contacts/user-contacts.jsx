import { Card } from "../../shared-styles/Card";
import UserContactList from "../user-contact-list/UserContactList";

const UserContacts = () => {
    return ( 
        <Card style={{
            flexDirection: 'column',
            padding: '20px 16px'
        }}>
            <UserContactList />
            <UserContactList />
            <UserContactList />
            <UserContactList />
        </Card>
     );
}
 
export default UserContacts;