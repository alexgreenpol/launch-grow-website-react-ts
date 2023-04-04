import { FC } from "react";
import cn from "classnames";
import "./LeftTitledContent.scss";
import HeadingBlock from "../HeadingBlock/HeadingBlock";

type LeftTitledContentProps = {
    title: string;
    subtitle?: string;
    text?: string;
    label?: string;
    buttonUrl?: string;
    buttonText?: string;
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

const LeftTitledContent: FC<LeftTitledContentProps> = ({
    title,
    subtitle,
    text,
    label,
    buttonText,
    buttonUrl,
    children,
    className,
}) => {
    return (
        <section className={cn("left-titled-content", "pd--m", className)}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <HeadingBlock
                            title={title}
                            subtitle={subtitle}
                            text={text}
                            label={label}
                            buttonText={buttonText}
                            buttonUrl={buttonUrl}
                        />
                    </div>
                    <div className="pure-u-1 pure-u-md-2-3">
                        <div className="left-titled-content__main">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeftTitledContent;
