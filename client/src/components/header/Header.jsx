import CustomButton from "../custom-button/Custom-button";
import { Header as HeaderContainer, HeaderContent, IconSvg, SearchInput } from "./Header.styled";

import Avatar from './../avatar/avatar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
import { AlignVertical } from "../../shared-styles/alignment";

const Header = () => {
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
                    position: 'relative'
                }}>
                    <IconSvg icon={faSearch} />
                    <SearchInput type="text" />
                </div>
                <CustomButton>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span style={{ marginLeft: '5px' }}>Create</span>
                </CustomButton>

                <Avatar imageUrl="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg" alt="" />
            </HeaderContent>
        </HeaderContainer>
    );
}

export default Header;