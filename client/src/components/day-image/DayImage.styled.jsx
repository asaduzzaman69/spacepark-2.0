import styled from "styled-components";
import Avatar from "../avatar/avatar";

export const DayImageWrap = styled.img`
    width: 130px;
    height: 210px;
    image-rendering: pixelated;
    border-radius: 16px;
    box-shadow: -1px 1px 20px #1666ca3b;

`


export const DayImageAvatar = styled(Avatar)`
    position: absolute;
    top: 12px;
    left: 3px;
    border: 2px solid white;
    padding: 4px;

`