import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { ListItem,ListItemText, ListIcon, ListLink } from "./NavItem.styled";

const NavItem = () => {
    return ( 
       <ListItem>
           <ListLink href="">
               <ListIcon size="lg" icon={faCalendar} />
               <ListItemText>
               Notification
               </ListItemText>
           </ListLink>
       </ListItem>
     );
}
 
export default NavItem;