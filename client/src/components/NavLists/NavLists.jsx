import { NavData } from "../../config/fakeData";
import NavItem from "../NavItem/NavItem";
import { NavCard } from "./NavLists.styled";
const NavLists = () => {
    return (
        <NavCard>
            <ul>
                {
                    NavData.map(({id, ...otherProps}) => <NavItem key={id} {...otherProps}  />)
                }

            </ul>
        </NavCard>
    );
}

export default NavLists;