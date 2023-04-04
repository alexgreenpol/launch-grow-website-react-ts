import { FC } from "react";
import "./CounterList.scss";

type CounterListItem = {
    title: string;
    text: string;
    iconUrl: string;
};

type CounterListProps = {
    items: CounterListItem[];
};

const CounterList: FC<CounterListProps> = ({ items }) => {
    return (
        <ul className="counter-list">
            {items.map((item, index) => {
                return (
                    <li className="counter-list__item">
                        <div className="counter-list__icon">
                            <img src={item.iconUrl} alt="" />
                        </div>
                        <div className="counter-list__content">
                            <span className="counter-list__count">
                                .0{index + 1}
                            </span>
                            <h5 className="counter-list__title">
                                {item.title}
                            </h5>
                            <p className="counter-list__text">{item.text}</p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CounterList;
