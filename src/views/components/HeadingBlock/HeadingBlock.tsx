import { FC } from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import "./HeadingBlock.scss";

type HeadingBlockProps = {
    title: string;
    subtitle?: string;
    text?: string;
    label?: string;
    buttonText?: string;
    buttonUrl?: string;
};

const HeadingBlock: FC<HeadingBlockProps> = ({
    title,
    subtitle,
    text,
    label,
    buttonText,
    buttonUrl,
}) => {
    return (
        <div className="heading-block">
            {label && <span className="content-label">{label}</span>}
            <h2 className="heading-block__title">{title}</h2>
            {subtitle && (
                <h5 className="heading-block__subtitle">{subtitle}</h5>
            )}
            {text && <p className="heading-block__text">{text}</p>}
            {buttonUrl && buttonText && (
                <ButtonLink url={buttonUrl}>{buttonText}</ButtonLink>
            )}
        </div>
    );
};

export default HeadingBlock;
