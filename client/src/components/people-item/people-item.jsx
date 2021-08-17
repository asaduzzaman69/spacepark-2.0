import { useState } from 'react';

// Core component
import CustomButton from './../custom-button/Custom-button'

// styled component
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import { PeopleAlign, PeopleButton, PeopleDescription, PeopleItemImage } from './people-item.styled';
import { Loader } from '../../shared-styles/utils.styled';


const PeopleItem = ({displayName, handleClick}) => {
    const [postStatus,setPostStatus] = useState('');
    return (
        <PeopleAlign>
            <PeopleItemImage
                src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg"
                width="50px"
                alt=""
            />
            <div>
                <SemiBoldText>{displayName}</SemiBoldText>
                <ThinnerText>Software Engineer</ThinnerText>
                <PeopleDescription>Some other details</PeopleDescription>
            </div>
            <div>
                <CustomButton  type="clear">Ignore</CustomButton>
                <PeopleButton postStatus={postStatus} handleClick={() => handleClick(setPostStatus)}>
                    
                    {
                        postStatus  === 'pending' ? <Loader /> : postStatus === 'success' ? 'sent' : 'Send Request'
                    }
                </PeopleButton>
            </div>
        </PeopleAlign>
    );
}

export default PeopleItem;