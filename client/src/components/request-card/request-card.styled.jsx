import styled from "styled-components";
import { AlignVertical } from "../../shared-styles/alignment";
import { Card } from "../../shared-styles/Card";


export const RequestCard = styled(Card)`

flex-direction: column;
align-items: self-start;
margin-bottom: 20px;
`

export const ALignRequestCard = styled(AlignVertical)`
margin-left: 5px;
margin-bottom: 18px;
`

export const RequestTextContainer = styled.div `
margin-left: 12px;

& > h6 {
    margin-left: 3px;
    font-size: 14px;
}

& > h5, h6 {
    display: inline;
}
`