import { AlignVertical } from "../../shared-styles/alignment";
import { SemiBoldText, ThinnerText } from "../../shared-styles/typography";
import Avatar from "../avatar/avatar";
import CustomButton from "../custom-button/Custom-button";
import { ALignRequestCard, RequestCard as RequestCardWrapper,RequestTextContainer } from './request-card.styled'

const RequestCard = () => {
    return (
        <RequestCardWrapper>
            <ALignRequestCard>
                <Avatar imageUrl='https://res.cloudinary.com/dltd4gs4a/image/upload/v1625824437/photo-1535713875002-d1d0cf377fde_dkxxa2.jpg' />
                <RequestTextContainer>
                    <SemiBoldText>Selena Gomez</SemiBoldText> <ThinnerText style={{
                        color: '#53667B'
                    }}>Wants to add u to freinds</ThinnerText>
                </RequestTextContainer>
            </ALignRequestCard>
            <AlignVertical style={{
                width: "100%"
            }}>
                <CustomButton>Accept</CustomButton>
                <CustomButton type='outlined' bgColor='#223B5A'>Decline</CustomButton>
            </AlignVertical>

        </RequestCardWrapper>
    );
}

export default RequestCard;