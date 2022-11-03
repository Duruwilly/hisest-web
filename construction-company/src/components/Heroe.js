import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Heroe1 from '../assets/images/heroe1.jpg'
import Heroe2 from '../assets/images/heroe2.jpg'
import Heroe3 from '../assets/images/heroe3.jpg'
import OwlCarousel from 'react-owl-carousel'
import '../assets/vendors/owl-carousel/owl.carousel.min.css'
import '../assets/vendors/owl-carousel/owl.theme.default.min.css'
import 'owl.carousel'
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const Heroe = () => {
  const options = {
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    loop: true,
    margin: 0,
    nav: false,
    singleItem: true,
    smartSpeed: 500,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
  }; 

  return (
    <section
      className="slider-one-sec style3 "
    >
      <OwlCarousel className="slider-carousel owl-carousel owl-theme" {...options}>
        
        {/* slider one */}
        <div className="slider-one__single">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${Heroe1})` }}
          >
            <div className="container">
              <div className="row clearfix">
                <div className="col-x1-12">
                  <div className="slider-one__single-content text-center">
                  <h3>Quality Construction Services.</h3>
                    <h2>
                      We construct using modern <br /> technology
                    </h2>
                    <p>
                    At Hisest, We equally attach high premium to constant training <br /> of all cetegories of our personnel to meet with new challenges.
                    </p>
                    <div className="btn-box">
                      <Link
                        to="/contact"
                        className="thm-btn"
                        data-text="Request Quote"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider two */}
        <div className="slider-one__single">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${Heroe2})` }}
          >
            <div className="container pl-0">
              <div className="row clearfix">
                <div className="col-x1-12">
                  <div className="slider-one__single-content text-center">
                  <h3>High Premium Services.</h3>
                    <h2>
                       Modern Construction & <br /> Management
                    </h2>
                    <p>At Hisest, We equally attach high premium to constant training of all cetegories of <br /> our personnel to meet with new challenges.</p>
                    <div className="btn-box">
                      <Link to="/contact" className="thm-btn" data-text="Request Quote">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* slider three */}
        <div className="slider-one__single">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${Heroe3})` }}
          >
            <div className="container">
              <div className="row clearfix">
                <div className="col-x1-12">
                  <div className="slider-one__single-content text-center">
                    <h3>Quality Construction Services.</h3>
                    <h2>
                      Best solution for <br /> construction
                    </h2>
                    <p>
                    At Hisest, We equally attach high premium to constant training of all cetegories of <br /> our personnel to meet with new challenges.
                    </p>
                    <div className="btn-box">
                      <Link to="/contact" className="thm-btn" data-text="Request Quote">
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
}

export default Heroe