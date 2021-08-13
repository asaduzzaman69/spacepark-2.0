import { ListItem,ListItemText, ListIcon, ListLink } from "./NavItem.styled";

const NavItem = ({icon,label}) => {
    return ( 
       <ListItem>
           <ListLink to='/people' href="">
               <ListIcon size="lg" icon={icon} />
               <ListItemText>
               {label}
               </ListItemText>
           </ListLink>
       </ListItem>
     );
}
 
export default NavItem;