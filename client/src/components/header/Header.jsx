import CustomButton from "../custom-button/Custom-button";
import { Header as HeaderContainer, HeaderButton, HeaderContent, IconSvg, SearchInput } from "./Header.styled";

import Avatar from './../avatar/avatar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
import { AlignVertical } from "../../shared-styles/alignment";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../redux/reducer/postSlice";

const Header = () => {
const { isPostModalOpen } = useSelector(state => state.post)
const dispatch = useDispatch() 
    return (
        <HeaderContainer>
            <AlignVertical>
                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1626502086/Screenshot_89_yh7jjw.png" />
                <h4>
                    Spacepark

                </h4>
            </AlignVertical>
            <HeaderContent>
                <div style={{
                    position: 'relative',
                    color: '#C0C8D1'
                }}>
                    <IconSvg icon={faSearch} />
                    <SearchInput placeholder="search" type="text" />
                </div>
                <HeaderButton handleClick={() => dispatch(toggle(!isPostModalOpen)) } >
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span style={{ marginLeft: '5px' }}>Create</span>
                </HeaderButton>

                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" alt="" />
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;