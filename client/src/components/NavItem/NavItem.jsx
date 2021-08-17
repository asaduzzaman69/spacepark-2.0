import { ListItem,ListItemText, ListIcon, ListLink } from "./NavItem.styled";

const NavItem = ({icon,label, link}) => {
    return ( 
       <ListItem isActive={ link === window.location.pathname}>
           <ListLink to={link} href="">
               <ListIcon size="lg" icon={icon} />
               <ListItemText>
               {label}
               </ListItemText>
           </ListLink>
       </ListItem>
     );
}
 
export default NavItem;