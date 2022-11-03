import React, { useEffect } from 'react'
import Heroe3 from "../assets/images/heroe3.jpg";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import IcomoonReact from "icomoon-react";
import iconSet from "../../src/selection.json";
import $ from 'jquery'


const VisionAndMission = () => {
  return (
    <section className="mission-vision-one">
      <div className="mission-vision-one__wrapper">
        <div
          className="slider-bg-slide" style={{ backgroundImage: `url(${Heroe3})`}}
        ></div>
        <div className="slider-bg-slide-overlay"></div>
        <div className="container">
          <div className="mission-vision-one__inner">
            <div className="row vision-flex">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="mission-vision-one__single">
                  <div className="icon-box">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="road"
                      color="white"
                      size={40}
                    />
                  </div>
                  <h2>Our Mission</h2>
                  <p>
                  Our mission is to understand or client needs to deliver high-quality services on time and on budget. We will be recognized for being innovative and collaborative, developing our team, having long-term relationships with our clients and supply chain, while contributing to the community in which we operate.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="mission-vision-one__single">
                  <div className="icon-box">
                    <IcomoonReact
                      iconSet={iconSet}
                      icon="office"
                      color="white"
                      size={40}
                    />
                  </div>
                  <h2>Our Vision</h2>
                  <p>To be the leading brand in construction services recognized for quality and innovation, supporting our staff and the communities in which we work, by being the contractor of choice in our market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionAndMission