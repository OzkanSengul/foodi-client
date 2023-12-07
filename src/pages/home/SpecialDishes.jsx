import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../components/Cards";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  React.useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        console.log(specials);
        setRecipes(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="section-container my-20">
        <div className="text-left">
          <p className="subtitle">Special Dishes</p>
          <h2 className="title md:w-[520px]">Standout Dishes From Our MENU </h2>
        </div>
      </div>
      <Slider {...settings}>
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />          
        ))}
      </Slider>
    </>
  );
};

export default SpecialDishes;
