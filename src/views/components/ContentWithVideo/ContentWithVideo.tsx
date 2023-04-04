import { FC } from "react";
import cn from "classnames";
import "./ContentWithVideo.scss";
import VideoBox from "../VideoBox/VideoBox";
import HeadingBlock from "../HeadingBlock/HeadingBlock";

type ContentWithVideoProps = {
    title: string;
    text: string;
    label: string;
    videoLink: string;
    buttonText?: string;
    buttonUrl?: string;
    className?: string;
};

const ContentWithVideo: FC<ContentWithVideoProps> = ({
    title,
    text,
    label,
    videoLink,
    buttonText,
    buttonUrl,
    className,
}) => {
    return (
        <section className={cn("content-with-video", "pd--m", className)}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pd--xs">
                        <div className="content-with-video__content">
                            <HeadingBlock
                                title={title}
                                text={text}
                                label={label}
                                buttonText={buttonText}
                                buttonUrl={buttonUrl}
                            />
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pd--xs">
                        <VideoBox videoLink={videoLink} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWithVideo;
