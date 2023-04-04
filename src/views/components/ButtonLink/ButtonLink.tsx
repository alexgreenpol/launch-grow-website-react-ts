import { FC } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.scss";

type ButtonLinkProps = {
    children: string;
    url: string;
    className?: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ children, url, className }) => {
    return (
        <Link to={url} className={`btn ${className}`}>
            <span className="text">
                <span className="relative">{children}</span>
            </span>
            <span className="arrow">
                <svg
                    className="arrow-path"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 13"
                >
                    <line x1="8" y1="1" x2="13.5" y2="6.5"></line>
                    <line x1="8" y1="12" x2="13.5" y2="6.5"></line>
                    <line
                        className="stem"
                        x1="13.5"
                        y1="6.5"
                        x2="-10.5"
                        y2="6.5"
                    ></line>
                </svg>
            </span>
        </Link>
    );
};

export default ButtonLink;
