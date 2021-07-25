import DayImage, { DayImageButton, DayImageUser } from "../day-image/DayImage";
import { DayImagePreviewContainer } from "./day-image-preview.styled";

const DayImagePreview = () => {
    return (
        <DayImagePreviewContainer>
            <DayImage>
                <DayImageButton />
            </DayImage>

            <DayImage>
                <DayImageUser />
            </DayImage>
            <DayImage>
                <DayImageUser />
            </DayImage>
            <DayImage>
                <DayImageUser />
            </DayImage>

            <DayImage>
                <DayImageUser />
            </DayImage>
            <DayImage>
                <DayImageUser />
            </DayImage>            <DayImage>
                <DayImageUser />
            </DayImage>
            <DayImage>
                <DayImageUser />
            </DayImage>

        </DayImagePreviewContainer>
    );
}

export default DayImagePreview;