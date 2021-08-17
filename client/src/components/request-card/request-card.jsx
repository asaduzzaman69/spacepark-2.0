import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import Avatar from "../avatar/avatar";
import CustomButton from "../custom-button/Custom-button";
import { ALignRequestCard, RequestCard as RequestCardWrapper,RequestTextContainer } from './request-card.styled';

import {ApiCore} from './../../services/api/core'
import { updateCurrentUser } from "../../redux/reducer/userSlice";

import {  useDispatch, useSelector } from 'react-redux';

const RequestCard = ({sentBy: {displayName}, _id}) => {
    
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const updateRequestStatus = async (id, status) => {
        const api = new ApiCore({updateOne: true});
        await api.updateOne(`friends/${id}`, {
            status
        })
        const newArr = [...currentUser.friendsReq];

        const filterRequest = newArr.filter(el => el._id !== _id)
        const newUser = {
            ...currentUser,
            friendsReq: filterRequest
        }
        dispatch(updateCurrentUser(newUser))

    }
    return (
        <RequestCardWrapper>
            <ALignRequestCard>
                <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />
                <RequestTextContainer>
                    <SemiBoldText>{displayName}</SemiBoldText> <ThinnerText style={{
                        color: '#53667B'
                    }}>Wants to add u to freinds</ThinnerText>
                </RequestTextContainer>
            </ALignRequestCard>
            <AlignVertical style={{
                width: "100%"
            }}>
                <CustomButton handleClick={ () => updateRequestStatus(_id, 'accepted')}>Accept</CustomButton>
                <CustomButton handleClick={ () => updateRequestStatus(_id, 'rejected')} type='outlined' bgColor='#223B5A'>Decline</CustomButton>
            </AlignVertical>

        </RequestCardWrapper>
    );
}

export default RequestCard;