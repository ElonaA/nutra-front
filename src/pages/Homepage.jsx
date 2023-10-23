import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  return (
    <div>
      <header>
        <div id="sticky-header" className="menu-area">
          <div className="container">
            <div className="mobile-nav-toggler">
              <i className="fas fa-bars"></i>
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="row align-items-center">
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/categories">Pages</Link>
                          <ul className="sub-menu">
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="blog.html">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact Us</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down"></span>
                          </div>
                        </li>
                        <li className="active menu-item-has-children">
                          <Link to="/offers">Shop</Link>
                          <ul className="sub-menu">
                            <li className="active">
                              <a href="shop.html">Our Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="fas fa-angle-down"></span>
                          </div>
                        </li>
                        <li>
                          <Link to="#">ASK DOCTOR</Link>
                        </li>

                        <li>
                          <Link to="/admin">Admin Panel</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-3">
                    <div className="logo">
                      <a href="index.html">
                        <img src="img/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-9">
                    <div className="header-action">
                      <ul>
                        <li className="header-search">
                          <form action="#">
                            <button>
                              <i className="fas fa-search"></i>
                            </button>
                            <input
                              type="text"
                              placeholder="Search fre Medicines"
                            />
                          </form>
                        </li>
                        <li className="header-user d-none d-md-block">
                          <a href="contact.html">
                            <i className="far fa-user"></i>
                          </a>
                        </li>
                        <li className="header-shop-cart d-none d-md-flex">
                          <a href="#">
                            <img src="img/cart.png" alt="" />
                            <span className="cart-count">0</span>
                          </a>
                          <span className="cart-price">$0.00</span>
                          <ul className="minicart">
                            <li className="d-flex align-items-start">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="img/cart1.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <h4>
                                  <a href="#">Exclusive Winter Jackets</a>
                                </h4>
                                <div className="cart-price">
                                  <span className="new">$229.9</span>
                                  <span>
                                    <del>$229.9</del>
                                  </span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a href="#">
                                  <i className="far fa-trash-alt"></i>
                                </a>
                              </div>
                            </li>
                            <li className="d-flex align-items-start">
                              <div className="cart-img">
                                <a href="#">
                                  <img src="img/cart2.jpg" alt="" />
                                </a>
                              </div>
                              <div className="cart-content">
                                <h4>
                                  <a href="#">Winter Jackets For Women</a>
                                </h4>
                                <div className="cart-price">
                                  <span className="new">$229.9</span>
                                  <span>
                                    <del>$229.9</del>
                                  </span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a href="#">
                                  <i className="far fa-trash-alt"></i>
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="total-price">
                                <span className="f-left">Total:</span>
                                <span className="f-right">$239.9</span>
                              </div>
                            </li>
                            <li>
                              <div className="checkout-link">
                                <a href="#">Shopping Cart</a>
                                <a className="black-color" href="#">
                                  Checkout
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-category d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-category-wrap">
                  <div className="header-cat-list">
                    <ul>
                      <li>
                        <a href="shop.html">Health Store</a>
                      </li>
                      <li>
                        <a href="shop.html">COLLECTIONS</a>
                      </li>
                      <li>
                        <a href="shop.html">protein Store</a>
                      </li>
                      <li>
                        <a href="shop.html">Pharmacy</a>
                      </li>
                      <li>
                        <a href="shop.html">Tests</a>
                      </li>
                      <li>
                        <a href="shop.html">MedPlus</a>
                      </li>
                      <li>
                        <a href="shop.html">BEAUTY</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-category-btn">
                    <a href="shop.html">GET 5% OFF NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* breadcrumb-area */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Shop
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* shop-area */}
        <div className="shop-area shop-inner-page pt-100 pb-100">
          <div className="container">
            <div className="row justify-content-center row-reverse">
              <div className="col-3 order-2 order-lg-0">
                <aside className="shop-sidebar">
                  <div className="widget">
                    <div className="sidebar-search">
                      <form action="#">
                        <input type="text" placeholder="Search ..." />
                        <button type="submit">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Category</h4>
                    <div className="shop-cat-list">
                      <ul>
                        <li>
                          <a href="shop.html">
                            Medication <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Disposable <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            PPE-Kit <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Face-Mask <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Safety-Suits <span>+</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop.html">
                            Eye-Protect <span>+</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Top Brand</h4>
                    <div className="shop-brand-list">
                      <ul>
                        <li>
                          <a href="shop.html">Medication</a>
                        </li>
                        <li>
                          <a href="shop.html">Carnation</a>
                        </li>
                        <li>
                          <a href="shop.html">Suppke</a>
                        </li>
                        <li>
                          <a href="shop.html">WeBeyond</a>
                        </li>
                        <li>
                          <a href="shop.html">Edstudy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget">
                    <h4 className="sidebar-title">Filter by Price</h4>
                    <div className="price_filter">
                      <div
                        id="slider-range"
                        className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                      >
                        <div
                          className="ui-slider-range ui-widget-header ui-corner-all"
                          style={{ left: "14.2857%", width: "64.2857%" }}
                        ></div>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style={{ left: "14.2857%" }}
                        ></span>
                        <span
                          className="ui-slider-handle ui-state-default ui-corner-all"
                          tabindex="0"
                          style={{ left: "78.5714%" }}
                        ></span>
                      </div>
                      <div className="price_slider_amount">
                        <span>Price :</span>
                        <input
                          type="text"
                          id="amount"
                          name="price"
                          placeholder="Add Your Price"
                        />
                        <input type="submit" className="btn" value="Filter" />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-9">
                <div className="shop-wrap">
                  <h4 className="title">Shop</h4>
                  <div className="shop-page-meta mb-30">
                    <div className="shop-grid-menu">
                      <ul>
                        <li className="active">
                          <a href="#">
                            <i className="fas fa-th"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-showing-result">
                      <p>Total Items 1-12 of 13</p>
                    </div>
                    <div className="shop-show-list">
                      <form action="#">
                        <label for="show">Show</label>
                        <select
                          id="show"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">08</option>
                          <option value="">12</option>
                          <option value="">16</option>
                          <option value="">18</option>
                          <option value="">20</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">08</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              08
                            </li>
                            <li data-value="" className="option">
                              12
                            </li>
                            <li data-value="" className="option">
                              16
                            </li>
                            <li data-value="" className="option">
                              18
                            </li>
                            <li data-value="" className="option">
                              20
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div className="shop-short-by">
                      <form action="#">
                        <label for="shortBy">Sort By</label>
                        <select
                          id="shortBy"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">Sort by latest</option>
                          <option value="">Low to high</option>
                          <option value="">High to low</option>
                          <option value="">Popularity</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">Sort by latest</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              Sort by latest
                            </li>
                            <li data-value="" className="option">
                              Low to high
                            </li>
                            <li data-value="" className="option">
                              High to low
                            </li>
                            <li data-value="" className="option">
                              Popularity
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Sanitizers</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Axiom Karela Jamun Juice
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$97.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Juice</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Episoft AC Sunscreen Cream
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$370.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img3.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Microscope</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Glucon-D Instant Energy
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$280.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img4.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Mask</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Axiom Karela Jamun Juice
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$190.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img5.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Juice</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              La Shield Sunscreen Gel SPF 40
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$29.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img6.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Sanitizers</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Axiom Karela Jamun Juice
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$97.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img7.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Juice</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Episoft AC Sunscreen Cream
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$370.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img8.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Microscope</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Glucon-D Instant Energy
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$280.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img9.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Mask</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Axiom Karela Jamun Juice
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$190.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img10.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Juice</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              La Shield Sunscreen Gel SPF 40
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$29.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Sanitizers</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Axiom Karela Jamun Juice
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              3.2 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$97.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="shop-item mb-45">
                        <div className="shop-thumb">
                          <a href="shop-details.html">
                            <img src="img/img2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="shop-content">
                          <span className="cat">Juice</span>
                          <h5 className="title">
                            <a href="shop-details.html">
                              Episoft AC Sunscreen Cream
                            </a>
                          </h5>
                          <div className="shop-item-rating">
                            <span className="avg-rating">
                              {" "}
                              4.5 <i className="far fa-star"></i>
                            </span>
                            <span className="total-rating">349 Ratings</span>
                          </div>
                          <p className="shop-discount">
                            MRP <del>$300</del>{" "}
                            <span className="discount-off">6% OFF</span>
                          </p>
                          <div className="shop-bottom">
                            <ul>
                              <li className="price">$370.00</li>
                              <li className="add">
                                <a href="shop-details.html">ADD +</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shop-page-meta">
                    <div className="shop-grid-menu">
                      <ul>
                        <li className="active">
                          <a href="#">
                            <i className="fas fa-th"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-list"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-showing-result">
                      <p>Total Items 1-12 of 13</p>
                    </div>
                    <div className="shop-show-list">
                      <form action="#">
                        <label for="bottomShow">Show</label>
                        <select
                          id="bottomShow"
                          className="selected"
                          style={{ display: "none" }}
                        >
                          <option value="">08</option>
                          <option value="">12</option>
                          <option value="">16</option>
                          <option value="">18</option>
                          <option value="">20</option>
                        </select>
                        <div className="nice-select selected" tabindex="0">
                          <span className="current">08</span>
                          <ul className="list">
                            <li data-value="" className="option selected">
                              08
                            </li>
                            <li data-value="" className="option">
                              12
                            </li>
                            <li data-value="" className="option">
                              16
                            </li>
                            <li data-value="" className="option">
                              18
                            </li>
                            <li data-value="" className="option">
                              20
                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                    <div className="shop-pagination">
                      <ul>
                        <li className="active">
                          <a href="shop.html">1</a>
                        </li>
                        <li>
                          <a href="shop.html">2</a>
                        </li>
                        <li>
                          <a href="shop.html">
                            <i className="fas fa-angle-double-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* shop-area-end */}

        {/* core-features-area */}
        <section className="core-features-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="core-features-item mb-30">
                  <div className="core-features-icon">
                    <img src="img/delivery.png" alt="" />
                  </div>
                  <div className="core-features-content">
                    <h4 className="title">Home Delivery</h4>
                    <p>
                      Product Delivery is a customer-centric approach to
                      defining.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-features-item mb-30">
                  <div className="core-features-icon">
                    <img src="img/return.png" alt="" />
                  </div>
                  <div className="core-features-content">
                    <h4 className="title">Click and Pick</h4>
                    <p>
                      Product Delivery is a customer-centric approach to
                      defining.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-features-item mb-30">
                  <div className="core-features-icon">
                    <img src="img/headphone.png" alt="" />
                  </div>
                  <div className="core-features-content">
                    <h4 className="title">Quality Support</h4>
                    <p>
                      Product Delivery is a customer-centric approach to
                      defining.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* core-features-area-end */}
      </main>

      <footer>
        <div className="footer-top-wrap">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Know Us</h4>
                  <div className="fw-link">
                    <ul>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="contact.html">Press Coverage</a>
                      </li>
                      <li>
                        <a href="contact.html">Business Partnership</a>
                      </li>
                      <li>
                        <a href="contact.html">Careers</a>
                      </li>
                      <li>
                        <a href="contact.html">Sehat Ke Sathi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Our Policies</h4>
                  <div className="fw-link">
                    <ul>
                      <li>
                        <a href="about-us.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="contact.html">Editorial Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Return Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">IP Policy</a>
                      </li>
                      <li>
                        <a href="contact.html">Grievance Redressal Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget">
                  <h4 className="fw-title">Our Services</h4>
                  <div className="fw-link">
                    <ul>
                      <li>
                        <a href="about-us.html">Order Medicines</a>
                      </li>
                      <li>
                        <a href="contact.html">Book Lab Tests</a>
                      </li>
                      <li>
                        <a href="contact.html">Consult a Doctor</a>
                      </li>
                      <li>
                        <a href="contact.html">Ayurveda Articles</a>
                      </li>
                      <li>
                        <a href="contact.html">English Articles</a>
                      </li>
                      <li>
                        <a href="contact.html">1mg Care Plan</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <div className="footer-widget">
                  <h4 className="fw-title">Subscribe Our Newsletter</h4>
                  <div className="f-newsletter">
                    <p>Get a free subscription to our health &amp; fitness</p>
                    <form action="#" className="newsletter-form">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                      />
                      <button>
                        <i className="fas fa-rocket"></i>
                      </button>
                    </form>
                  </div>
                  <div className="fw-download-btn">
                    <a href="#">
                      <img src="img/gp.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="img/as.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-counter-wrap">
            <div className="row">
              <div className="col-12">
                <div className="fcw-title text-center mb-45">
                  <h4 className="title">world LARGEST HEALTHCARE PLATFORM</h4>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="counter-item mb-30">
                  <h2 className="count">
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="160"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">6</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    M+
                  </h2>
                  <p>Visitors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="counter-item mb-30">
                  <h2 className="count">
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="27"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">7</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    M+
                  </h2>
                  <p>Orders Delivered</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="counter-item mb-30">
                  <h2 className="count">
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="190"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">9</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    K+
                  </h2>
                  <p>Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 20221 Yed. All Rights Reserved</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment-method-img text-center text-md-right">
                  <img src="img/card.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;