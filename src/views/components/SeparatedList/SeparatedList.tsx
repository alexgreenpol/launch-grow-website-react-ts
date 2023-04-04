import { FC } from "react";
import "./SeparatedList.scss";

type SeparatedListProps = {
    listItems: string[];
};

const SeparatedList: FC<SeparatedListProps> = ({ listItems }) => {
    return (
        <ul className="separated-list">
            {listItems.map((item) => {
                return (
                    <li className="separated-list__item" key={item}>
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default SeparatedList;
