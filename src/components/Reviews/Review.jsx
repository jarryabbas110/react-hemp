import React from "react";
import "./review.css";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Data = [
  {
    id: 1,
    picture: Image1,
    title: "John Doe",
    description: "Excellent Quality products. Love the hemp",
  },
  {
    id: 2,
    picture: Image2,
    title: "Jane Swift",
    description: "Excellent Quality products. Love the hemp",
  },
  {
    id: 3,
    picture: Image3,
    title: "Taylor Smith",
    description: "Excellent Quality products. Love the hemp",
  },
];

const Review = () => {
  return (
    <section className="reviews container section" id="review">
      <h2 className="section__title">Reviews</h2>
      <span className="section__subtitle">Customer Feedback</span>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 4,
          slideShadows: true,
        }}
        style={{
          "--swiper-pagination-color": "#E84025",
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Data.map(({ id, picture, title, description }) => {
          return (
            <SwiperSlide
              className="review__card"
              key={id}
              style={{
                background: "#A3CB52",
                color: "white",
              }}
            >
              <img src={picture} alt="" className="review__img" />

              <h3 className="review__name">{title}</h3>
              <p className="review__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;
