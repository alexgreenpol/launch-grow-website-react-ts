import { FC } from "react";
import "./ImageBox.scss";

type ImageBoxProps = {
    imgSrc: string;
};

const ImageBox: FC<ImageBoxProps> = ({ imgSrc }) => {
    return (
        <div className="image-box">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default ImageBox;
