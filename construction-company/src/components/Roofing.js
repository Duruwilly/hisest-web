import React from "react";
import roof1 from '../assets/images/roof1.jpeg'
import roof2 from '../assets/images/roof2.jpeg'
import civil3 from '../assets/images/civil4.jpeg'
import civil4 from '../assets/images/project2.jpeg'

const CivilTab = () => {
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof1} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Installation</p>
            </div>
          </div>
        </div>
      </div>

      {/* project two */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof2} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Restoration and maintenance</p>
            </div>
          </div>
        </div>
      </div>

      {/* project three */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof1} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Installation</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
        <div className="project-one__single">
          <div className="project-one__single-img">
            <div className="inner">
              <img src={roof2} alt="" />
            </div>
            <div className="content-box">
              <h2>Installation</h2>
              <p>Roof Restoration and maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CivilTab;
