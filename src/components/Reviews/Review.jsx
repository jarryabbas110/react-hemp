import React from 'react'
import "./review.css";
import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";


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

    }
];

const Review = () => {
  return (
    <section className="reviews container section" id='review'>
        <h2 className="section__title">Reviews</h2>
        <span className="section__subtitle">Customer Feedback</span>

        <Swiper className="review__container" 
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination= {{clickable: true,}}
        breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        }}
            modules={[Pagination]}
        >
            {Data.map(({id, picture, title, description}) => {
                return (
                <SwiperSlide className="review__card" key={id}>
                    <img src={picture} alt="" className='review__img'/>

                    <h3 className="review__name">{title}</h3>
                    <p className="review__description">{description}</p>
                </SwiperSlide>
                );
            })}
        </Swiper>

    </section>
  )
}

export default Review