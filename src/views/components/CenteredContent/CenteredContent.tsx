import { FC } from "react";
import cn from "classnames";
import "./CenteredContent.scss";
import HeadingBlock from "../HeadingBlock/HeadingBlock";

type CenteredContentProps = {
    title: string;
    label?: string;
    subtitle?: string;
    children: JSX.Element | JSX.Element[];
    className?: string;
};

const CenteredContent: FC<CenteredContentProps> = ({
    label,
    title,
    subtitle,
    children,
    className,
}) => {
    return (
        <section className={cn("centered-content", "pd--m", className)}>
            <div className="container">
                <div className="pure-g">
                    <div className="pure-u-1">
                        <div className="centered-content__content">
                            <HeadingBlock
                                title={title}
                                subtitle={subtitle}
                                label={label}
                            />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenteredContent;
