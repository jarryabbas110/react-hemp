import IMG3 from "../../assets/feature3.jpg";
import IMG2 from "../../assets/feature2.jpg";
import IMG1 from "../../assets/feature1.jpg";

import React from "react";
import "./featured.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Parallax, Autoplay, Pagination, Navigation } from "swiper";

const Data = [
  {
    id: 1,
    picture: IMG1,
    title: "John Doe",
    description: "Excellent Quality products. Love the hemp",
  },
  {
    id: 2,
    picture: IMG2,
    title: "Jane Swift",
    description: "Excellent Quality products. Love the hemp",
  },
  {
    id: 3,
    picture: IMG3,
    title: "Taylor Smith",
    description: "Excellent Quality products. Love the hemp",
  },
];

const Featured = () => {
  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Featured Products</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        parallax={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": " rgb(238, 37, 37)",
          "--swiper-pagination-color": " rgb(238, 37, 37)",
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Parallax, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Data.map(({ id, picture, title, description }) => {
          return (
            <SwiperSlide key={id}>
              <img src={picture} alt="" />
              {/* <h3 >{title}</h3>
              <p >{description}</p> */}
              <div className="text-on-image">
                <div className="title" data-swiper-parallax="-300">
                  {title}
                </div>
                {/* <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div> */}
                <div className="text" data-swiper-parallax="-100">
                  <p>{description}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Featured;
