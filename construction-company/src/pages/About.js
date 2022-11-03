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
import Heroe2 from "../assets/images/heroe2.jpg";
import Heroe3 from "../assets/images/heroe3.jpg";
import Project1 from "../assets/images/project1.jpeg";
import Project2 from "../assets/images/project2.jpeg";
import Project3 from "../assets/images/trailer-park.jpeg";
import installation from "../assets/images/installation2.jpeg";
import AbtProjectBg from "../assets/images/project/project-v1-img1.jpg";
import Projects from "../components/HalfProjects";

const About = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    }).init();
  });

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
          style={{ backgroundImage: `url(${Heroe1})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h2>About Us</h2>
                  <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>About Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-three-sec clearfix">
        <div
          className="feature-three__bg"
          style={{ backgroundImage: `url(${Heroe1})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="feature-three__title">
                <div className="sec-title">
                  <div className="sec-title__tagline">
                    <h6>More About Us</h6> <span className="right"></span>
                  </div>
                  <h2 className="sec-title__title">
                    Quality Construction <br />
                    Services
                  </h2>
                  <p className="sec-title__text">
                    HISEST Consult and Services is one of the leading consulting
                    and Engineering firms in Nigeria, servicing both private
                    enterprise and government agencies in the field of
                    engineering contract and advisory services. Our services
                    include every phase of development from reconnaissance,
                    through feasibility investigations, design, and construction
                    and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="feature-three__tab tabs-box">
                <div className="feature-three__tab-button">
                  <ul className="tab-buttons clearfix">
                    <li className="tab-btn active-btn">
                      <h3>Our Vision</h3>
                    </li>
                    <li className="tab-btn">
                      <h3>Our Mission</h3>
                    </li>
                    <li className="tab-btn">
                      <h3>Our Resources</h3>
                    </li>
                    <li className="tab-btn">
                      <h3>Human Capital</h3>
                    </li>
                  </ul>
                </div>

                <div className="tabs-content">
                  {/* start tab */}
                  <div className="tab active-tab">
                    <div className="feature-three__tab-content-item">
                      <OwlCarousel
                        className="feature-three__history-carousel owl-carousel owl-theme"
                        {...options}
                      >
                        {/* start feature three */}
                        <div className="feature-three__history-single">
                          <div className="history-text">
                            <h2>Vision</h2>
                          </div>
                          <div className="date-box">
                            <h2>Our Vision</h2>
                          </div>
                          <p>
                            To be the leading brand in construction services
                            recognized for quality and innovation, supporting
                            our staff and the communities in which we work, by
                            being the contractor of choice in our market.
                          </p>
                        </div>

                        {/* feature 2 */}
                        <div className="feature-three__history-single">
                          <div className="history-text">
                            <h2>Mission</h2>
                          </div>
                          <div className="date-box">
                            <h2>Our Mission</h2>
                          </div>
                          <p>
                            Our mission is to understand or client needs to
                            deliver high-quality services on time and on budget.
                            We will be recognized for being innovative and
                            collaborative, developing our team, having long-term
                            relationships with our clients and supply chain,
                            while contributing to the community in which we
                            operate.
                          </p>
                        </div>

                        {/* feature 3 */}
                        <div className="feature-three__history-single">
                          <div className="history-text">
                            <h2>resouces</h2>
                          </div>
                          <div className="date-box">
                            <h2>Our Resources</h2>
                          </div>
                          <p>
                            The company has an impressive list of human and
                            material resources required for top quality and cost
                            effective Engineering Services.
                          </p>
                        </div>

                        {/* feature 4 */}
                        <div className="feature-three__history-single">
                          <div className="history-text">
                            <h2>human capital</h2>
                          </div>
                          <div className="date-box">
                            <h2>Human Capital</h2>
                          </div>
                          <p>
                            We recruits and maintain highly qualified, dynamics
                            and well experience personnel in all relevant areas
                            of our operations We equally attach high premium to
                            constant training of all categories of our personnel
                            to meet with new challenges.
                          </p>
                        </div>

                        {/* feature end */}
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end  */}

      {/* founding partners */}
      <section className="services-one-sec services-one-sec--services">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sec-title__tagline">
              <span className="left"></span>
              <h6>Founding Partners</h6> <span className="right"></span>
            </div>
            <h2 className="sec-title__title">
              Our Founding Partners At Hisest
            </h2>
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
                  <img src={Heroe2} alt="" />
                </div>

                <div className="about__single-content">
                  <div className="services-one__single-content-title">
                    <h2>
                      Chief Engr. Bankole Akintemihin (B.Tech Eng, MNSE, COREN)
                    </h2>
                    <p>Chairman</p>
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
                  <img src={Heroe3} alt="" />
                </div>

                <div className="about__single-content">
                  <div className="services-one__single-content-title">
                  <h2>Oluwabunmi Samuel (DIP. MASCOM, B.Ed)</h2>
                  <p>Head</p>
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
                  <img src={Heroe2} alt="" />
                </div>

                <div className="about__single-content">
                  <div className="services-one__single-content-title">
                  <h2>Oloruntobi Oyedeji</h2>
                  <p>Head</p>
                  </div>
                </div>
              </div>
            </div>
            {/* end parnet three */}
          </div>
        </div>
      </section>
      {/* end partner */}

      {/* start project one single */}
      <Projects />
    </>
  );
};

export default About;
