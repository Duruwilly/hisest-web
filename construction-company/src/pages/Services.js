import React, { useEffect } from "react";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import OwlCarousel from "react-owl-carousel";
import "../assets/vendors/owl-carousel/owl.carousel.min.css";
import "../assets/vendors/owl-carousel/owl.theme.default.min.css";
import "owl.carousel";
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import Heroe1 from "../assets/images/heroe1.jpg";
import service2 from "../assets/images/trailer-park.jpeg";
import Heroe2 from "../assets/images/heroe2.jpg";
import Heroe3 from "../assets/images/heroe3.jpg";
import Service from '../assets/images/services.jpg'
import procurement from "../assets/images/procurement.jpg";
import procurement2 from "../assets/images/procurement4.jpeg";
import services3 from "../assets/images/steel.jpg";
import services4 from "../assets/images/roof.jpg";
import ServiceBg from "../assets/images/ServicesBeg.jpg";
import BgPattern from "../assets/images/shapes/why-choose-v2-shape1.png";
import $ from "jquery";
import "../../node_modules/jquery.appear/jquery.appear";
import HalfProjects from "../components/HalfProjects";

const Services = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    }).init();
  });

  const jQueryCode = () => {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      },
      {
        accY: -50,
      }
    );
  };

  useEffect(() => {
    jQueryCode();
  }, []);

  const options = {
    loop: false,
    margin: 30,
    nav: false,
    smartSpeed: 500,
    autoHeight: false,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1350: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${ServiceBg})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h2>Our Services</h2>
                  <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link to='/'>Home</Link>
                      </li>
                      <li>Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* start why chose us */}
      <section className="why-choose-two-sec why-choose-two-sec--services">
        <div
          className="shape1 wow slideInLeft"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <img src={BgPattern} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {/* why chose us content */}
            <div className="col-xl-6">
              <div className="why-choose-two__content">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>Why Choose Us </h6> <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">
                    Superior And Quality <br />
                    Services{" "}
                  </h2>
                  <p className="sec-title__text">
                    At Hisest, QUALITY as performance indicator is our key
                    driver, to archive this feat; we have a team of highly
                    trained and motivated professionals the industry can offer.
                    We are adequately equipped with human resources, good
                    construction tools and equipment to deliver any project
                    within time frame, with advance technology, engineering
                    skills, expertise and good understanding of expert design.
                  </p>
                </div>

                <div className="why-choose-two__content-progress">
                  {/* why chose use content */}
                  <div className="why-choose-two__content-progress-single">
                    <div className="top">
                      <h3>Project Planning - </h3>
                      <div className="count-text">100%</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* end why chose us content progress */}

                  {/* why chose us progress 2 */}
                  <div className="why-choose-two__content-progress-single">
                    <div className="top">
                      <h3>Quality Project - </h3>
                      <div className="count-text">100%</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* end why chose us content progress*/}

                  {/* why chose us content 3 */}
                  <div className="why-choose-two__content-progress-single mar0">
                    <div className="top">
                      <h3>Qualify Team - </h3>
                      <div className="count-text">100%</div>
                    </div>
                    <div className="bar">
                      <div
                        className="bar-inner count-bar"
                        data-percent="100%"
                      ></div>
                    </div>
                  </div>
                  {/* end why chose us content 3 */}
                </div>
              </div>
            </div>
            {/* end why chose us content progress*/}

            {/* why chose us content img */}
            <div className="col-xl-6">
              <div
                className="why-choose-two__img"
                style={{ backgroundImage: `url(${Service})` }}
              ></div>
            </div>
            {/* end why chose us content img */}
          </div>
        </div>
      </section>
      {/* end why chose us */}

      {/* project section */}
      <HalfProjects />

      {/* services start */}
      <section className="services-one-sec services-one-sec--services">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>Our Services</h6> <span className="right"></span>
            </div>
            <h2 className="sec-title__title">Our Professional Services</h2>
          </div>

          <div className="row">
            {/* parner one start */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="services-one__single">
                <div className="services-one__single-img">
                  <img src={services3} alt="" />
                </div>

                <div className="services-one__single-content">
                  <div className="services-one__single-content-title">
                    <h2>Civil Construction</h2>
                  </div>
                  <div className="services-one__single-content-bottom">
                    <p>
                      Our civil construction projects often involve any large
                      undertaking that involves public infrastructure, including
                      natural and manmade structures, some of our civil
                      construction projects includes construction of Trailer
                      Park, construction of Retaining wall at BHN Trailer Park{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end partner one */}

            {/* partner two */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="services-one__single">
                <div className="services-one__single-img">
                  <img src={procurement} alt="" />
                </div>

                <div className="services-one__single-content">
                  <div className="services-one__single-content-title">
                    <h2>Procurement</h2>
                  </div>
                  <div className="services-one__single-content-bottom">
                    <p>
                      We purchase materials for clients which involves every
                      goods and services a company needs to support it's daily
                      operations some of our services rendered involves heavy
                      duty vacuum cleaner, fencing light, indusrial fencing
                      protective equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}

            {/* partner three */}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="services-one__single">
                <div className="services-one__single-img">
                  <img src={services4} alt="" />
                </div>

                <div className="services-one__single-content">
                  <div className="services-one__single-content-title">
                    <h2>Facility Management</h2>
                  </div>
                  <div className="services-one__single-content-bottom">
                    <p>
                      Our facility management service deals with certain
                      facilities of another company or business. Our role
                      involves managing different types of buildings used in
                      companies. We ensure functionality, comfort safety,
                      sustainabilty and efficiency of the buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end parnet three */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
