import React from "react";
import services1 from "../assets/images/shapes/testimonials-v1-shape1.png";
import services2 from "../assets/images/update1.0/services-v3-shape2.png";
import IcomoonReact from "icomoon-react";
import iconSet from "../../src/selection.json";

import ServicesImg from "../assets/images/hisest3.jpeg";
import FacilityBg from "../assets/images/facilityBg.jpeg";
import SurveyBg from "../assets/images/hisest9.jpeg";

const Services = () => {
  return (
    <section className="services-three">
      <div className="shape1">
        <img src={services1} alt="icon" />
      </div>
      <div className="shape2 rotate-me">
        <img src={services2} alt="icon" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="services-three__top">
              <div className="sec-title">
                <div className="sec-title__tagline">
                  <h6>COMPANY SERVICES</h6> <span className="right"></span>
                </div>
                <h2 className="sec-title__title">
                  Quality Construction <br /> Services
                </h2>
              </div>
              <div className="text-box">
                <p>
                  Leading consulting and Engineering firms in Nigeria <br /> for
                  quality project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* services one */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single active">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${ServicesImg})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="road"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Civil Construction</h3>
              <p>
                Our civil construction projects often involve any large
                undertaking that involves public infrastructure, including
                natural and manmade structures, some of our civil construction
                projects includes construction of Trailer Park, construction of
                Retaining wall at BHN Trailer Park
              </p>
            </div>
          </div>
          {/* services two */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${ServicesImg})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="library"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Procurement</h3>
              <p>
                We purchase materials for clients which involves every goods and
                services a company needs to support it's daily operations some
                of our services rendered involves heavy duty vacuum cleaner,
                fencing light, indusrial fencing protective equipment.
              </p>
            </div>
          </div>
          {/* services three */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${FacilityBg})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="office"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Facility Management</h3>
              <p>
                Our facility management service deals with certain facilities of
                another company or business. Our role involves managing
                different types of buildings used in companies. We ensure
                functionality, comfort safety, sustainabilty and efficiency of
                the buildings.
              </p>
            </div>
          </div>
          {/* services four */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="services-three__single">
              <div
                className="services-three__single__bg"
                style={{ backgroundImage: `url(${SurveyBg})` }}
              ></div>
              <div className="services-three__single-icon">
                <IcomoonReact
                  iconSet={iconSet}
                  icon="dice"
                  color="white"
                  size={40}
                />
              </div>
              <h3>Engineering Survey</h3>
              <p>
                We carry out Engineering Survey activities required to support
                the sound conception, planning, design, construction,
                maintenance, and operation of engineered projects, which
                involves locating or laying out alignments, positions, or
                elevations for the construction of fixed works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
