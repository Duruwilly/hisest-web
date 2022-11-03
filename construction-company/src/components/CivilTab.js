import React from "react";
import civil1 from "../assets/images/civil.jpeg";
import civil2 from "../assets/images/civil3.jpeg";
import civil3 from "../assets/images/civil4.jpeg";
import civil4 from "../assets/images/project2.jpeg";

const CivilTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={civil1} alt="" />
            </div>
            <div className="content-box">
              <h2>Civil Construction</h2>
              <p>Casting of Reinforced floor</p>
            </div>
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={civil2} alt="" />
            </div>
            <div className="content-box">
              <h2>Civil Construction</h2>
              <p>Casting of Reinforced floor</p>
            </div>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={civil3} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Installation of public pipes</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={civil4} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Installation of public pipes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CivilTab;
