import { FC } from "react";
import "./PlusList.scss";

type PlusListProps = {
    items: string[];
};

const PlusList: FC<PlusListProps> = ({ items }) => {
    return (
        <ul className="plus-list">
            {items.map((item) => {
                return <li className="plus-list__item">{item}</li>;
            })}
        </ul>
    );
};

export default PlusList;
