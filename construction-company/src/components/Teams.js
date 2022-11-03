import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heroe1 from "../assets/images/heroe1.jpg";
import Heroe2 from "../assets/images/heroe2.jpg";
import Heroe3 from "../assets/images/heroe3.jpg";
import OwlCarousel from "react-owl-carousel";
import "../assets/vendors/owl-carousel/owl.carousel.min.css";
import "../assets/vendors/owl-carousel/owl.theme.default.min.css";
import "owl.carousel";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import WOW from "wowjs";
import "../assets/vendors/animate/animate.min.css";
import "../assets/vendors/animate/custom-animate.css";

const Teams = () => {
  useEffect(() => {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true,
    }).init();
  });
  const options = {
    loop: true,
    margin: 10,
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
      750: {
        items: 2,
      },
      1100: {
        items: 3,
      },
      1350: {
        items: 4,
      },
    },
  };
  return (
    <section className="team">
      <div className="container-fluid">
        <div className="sec-title text-center">
          <div className="sec-title__tagline">
            <span className="left"></span>
            <h6>Our Team</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">Our Team At Hisest</h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <OwlCarousel
              className="project-three__carousel owl-carousel owl-theme"
              {...options}
            >
              {/* team 1 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>
                        Chief Engr. Bankole Akintemihin (B.Tech Eng, MNSE,
                        COREN)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* team 2 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>
                      General Manager: Olaseni Emmanuel. BSc, Surv&Geo,ANIS, Mosha(UK)
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 3 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>Oluwabunmi Samuel (DIP. MASCOM, B.Ed)</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 4 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>Olaseni Tiraoluwa (HND Acct.)</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 5 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>Oloruntobi Oyedeji</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* team 6 */}
              <div
                className="project-three__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="services-one__single">
                  <div className="services-one__single-img">
                    <img src={Heroe1} alt="" />
                  </div>
                  <div class="services-one__single-content">
                    <div class="services-one__single-content-title">
                      <h2>
                      Godspower Osarumese
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* teams ends */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
