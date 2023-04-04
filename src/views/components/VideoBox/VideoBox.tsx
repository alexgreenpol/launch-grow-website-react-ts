import { FC } from "react";
import "./VideoBox.scss";

type VideoBoxProps = {
    videoLink: string;
};

const VideoBox: FC<VideoBoxProps> = ({ videoLink }) => {
    return (
        <div className="video-box">
            <video loop={true} muted={true} playsInline={true} autoPlay={true}>
                <source src={videoLink} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBox;
