import React from "react";
import "./product.css";
import IMG1 from "../../assets/kurta.jpg";
import IMG2 from "../../assets/jacket.jpg";
import IMG3 from "../../assets/shirt.jpg";
import IMG4 from "../../assets/fabric.jpg";

const design = [
  {
    id: 1,
    image: IMG1,
    title: "100% Organic Kurta",
    exp_date: "10-08-2022",
    old_price: "9000",
    newPrice: "8000",
  },
  {
    id: 2,
    image: IMG2,
    title: "Hemp Jacket",
    exp_date: "10-08-2022",
    old_price: "9000",
    newPrice: "8000",
  },
  {
    id: 3,
    image: IMG3,
    title: "Hemp Shirt",
    exp_date: "10-08-2022",
    old_price: "9000",
    newPrice: "8000",
  },
  {
    id: 4,
    image: IMG4,
    title: "Organic Hemp Fabric",
    exp_date: "10-08-2022",
    old_price: "9000",
    newPrice: "8000",
  },
];

const Products = () => {
  return (
    <section className="product section" id="product">
      <h2 className="section__title">Products</h2>
      <span className="section__subtitle"></span>

      <div className="product__container grid">
        {design.map(
          ({ id, image, title, exp_date, rs, old_price, newPrice }) => {
            return (
              <article key={id} className="product__item">
                <div className="product__item-image">
                  <img src={image} alt={title} />
                </div>
                {/* <h3>{title}</h3>
              <div className="product__item-cta">
                <a href="" className="btn">
                  Buy Now
                </a>
              </div> */}

                <div className="cardInfo">
                  <h1>{title}</h1>
                  <p className="date_">{exp_date}</p>
                  <div className="action">
                    <div className="priceGroup">
                      <p className="price old_price">
                        Rs.
                        {old_price}
                      </p>
                      <p className="price newPrice">
                        Rs.
                        {newPrice}
                      </p>
                    </div>
                    <div className="cart">
                      <svg
                        className="outCart"
                        xmlns="<http://www.w3.org/2000/svg>"
                        viewBox="0 0 64 64"
                      >
                        <path d="M2 6h10l10 40h32l8-24H16"></path>
                        <circle cx="23" cy="54" r="4"></circle>
                        <circle cx="49" cy="54" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
      <a href="" className="load__btn">
        View More
      </a>
    </section>
  );
};

export default Products;
