import NavLists from "../NavLists/NavLists";
import UserCard from "../user-card/user-card";

const LeftNav = () => {
    return (
        <div>
            <UserCard />
            <NavLists />
        </div>
    );
}

export default LeftNav;