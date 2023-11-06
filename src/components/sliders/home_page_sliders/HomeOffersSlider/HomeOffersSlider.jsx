import React from "react";
import "./HomeOffersSlider.css";
import Slider from "react-slick";
import HomeOfferItem from "../../../../pages/Homepage/HomeOfferItem/HomeOfferItem";

class HomeOffersSlider extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    // offers list
    const HomeOffersList = this.props.offers.map((item) => (
      <HomeOfferItem
        category={item.category}
        title={item.title}
        rating={item.rating}
        old_price={item.old_price}
        discount={item.discount}
        price={item.price}
        img={item.img}
      />
    ));

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="row shop-active">
        { HomeOffersList }
      </Slider>
    );
  }
}

export default HomeOffersSlider;