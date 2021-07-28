import { faEdit, faSave,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card } from "../../shared-styles/Card";
import { DropdownItem, DropdownList, DropdownText } from './Dropdown-menu.styled';

const Dropdown = ({ isOpen = true, handleToggle }) => {
    return (
        <>

            {
                isOpen && (
                    <Card style={{
                        width: '280px',
                        margin: '10px 0px',
                        position: 'absolute',
                        left: '-269px'
                    }}>
                        <DropdownList>
                            <DropdownItem onClick={() => handleToggle && handleToggle()}>
                                <FontAwesomeIcon  icon={faEdit}/>
                                <DropdownText>edit</DropdownText>
                               
                            </DropdownItem>
                            <DropdownItem onClick={() => handleToggle && handleToggle()}>
                                <FontAwesomeIcon  icon={faSave}/>
                                <DropdownText>Save</DropdownText>
                            </DropdownItem>
                        </DropdownList>
                    </Card>
                )
            }
        </>



    );
}



export default Dropdown;