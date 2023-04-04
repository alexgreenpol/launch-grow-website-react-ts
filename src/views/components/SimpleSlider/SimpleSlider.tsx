import { FC } from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SimpleSliderProps = {
    children: JSX.Element[];
};

const SimpleSlider: FC<SimpleSliderProps> = ({ children }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "simple-slider",
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default SimpleSlider;
