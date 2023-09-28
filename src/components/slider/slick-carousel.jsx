import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ],
    nextArrow: (
      <div>
        <div className="next-slick-arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"><span class="material-symbols-outlined">arrow_back_ios</span></div>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div className="card__wrapper">
        <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div className="card__wrapper">
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div>
      <div className="card">
          <div className="product__card">
          <div className="product__top">
              <a href=""><img className="product__photo"/></a>
          </div>
          <div className="card__content">
              <span className="card__category">Sanitizers</span>
              <h5 className="card__title"><a href="shop-details.html">Axiom Karela Jamun Juice</a></h5>
              <p className="card__status">In stock</p>
              <div className="card__bottom">
                  <ul className="card__buy">
                      <li className="price">$97.00</li>
                      <li className="add"><a href="">ADD +</a></li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
      </div>

    </Slider>
  );
}