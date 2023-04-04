import { FC } from "react";
import cn from "classnames";
import ButtonLink from "../ButtonLink/ButtonLink";
import VideoBox from "../VideoBox/VideoBox";
import "./Hero.scss";

type HeroProps = {
    title: string;
    text: string;
    buttonUrl: string;
    buttonText: string;
    videoLink: string;
    className?: string;
};

const Hero: FC<HeroProps> = ({
    title,
    text,
    buttonUrl,
    buttonText,
    videoLink,
    className,
}) => {
    return (
        <section className={cn("hero", className)}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 pd--xs">
                        <div className="hero__content">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <ButtonLink url={buttonUrl}>
                                {buttonText}
                            </ButtonLink>
                        </div>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 pd--xs">
                        <div className="hero__video">
                            <VideoBox videoLink={videoLink} />
                        </div>
                    </div>
                </div>
            </div>
            <span className="hero__decor hero__decor--left">From ideation</span>
        </section>
    );
};

export default Hero;
