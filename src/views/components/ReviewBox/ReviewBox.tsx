import { FC } from "react";
import cn from "classnames";
import "./ReviewBox.scss";

type ReviewBoxProps = {
    person: string;
    position: string;
    photoLink: string;
    text: string;
    className?: string;
};

const ReviewBox: FC<ReviewBoxProps> = ({
    person,
    position,
    photoLink,
    text,
    className,
}) => {
    return (
        <div className={cn("review-box", className)}>
            <div className="review-box__person">
                <img src={photoLink} alt="" />
                <p className="review-box__person-name">{person}</p>
                <p className="review-box__person-position">{position}</p>
            </div>
            <div className="review-box__text">“ {text} ”</div>
        </div>
    );
};

export default ReviewBox;
