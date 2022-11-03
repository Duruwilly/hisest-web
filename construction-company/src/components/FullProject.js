import React, { useState } from "react";
import Project1 from "../assets/images/project1.jpeg";
import Project2 from "../assets/images/project2.jpeg";
import Project5 from "../assets/images/projects5.jpeg";
import Project6 from "../assets/images/projects6.jpeg";
import Project3 from "../assets/images/services3.jpeg";
import Project4 from "../assets/images/services4.jpeg";
import installation from "../assets/images/installation2.jpeg";
import civilWork from "../assets/images/civil.jpeg";

const FullProjects = () => {

  const [activeTab, setActiveTab] = useState('tab1');

 const toggleTab = (index) => {
   setActiveTab(index);
 };

  return (
    <section className="project-one-sec">
      <div className="shape1">
        <img src="../assets/images/shapes/project-v1-shape1.png" alt="" />
      </div>
      <div className="shape2">
        <img src="../assets/images/shapes/project-v1-shape2.png" alt="" />
      </div>
      <div className="container-fluid">
        <div className="sec-title text-center">
          <div className="sec-title__tagline">
            <span className="left"></span>
            <h6>Our project</h6> <span className="right"></span>
          </div>
          <h2 className="sec-title__title">Our Working Project</h2>
        </div>

        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            {/* project menu box */}
            <div className="project-one__menu-box">
              <ul className="project-filter clearfix post-filter has-dynamic-filters-counter">
                <li data-filter=".filter-item"
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={() => toggleTab("tab1")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Civil
                  </span>
                </li>
                <li data-filter=".filter-item"
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={() => toggleTab("tab2")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Roofing
                  </span>
                </li>
                <li data-filter=".filter-item"
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={() => toggleTab("tab3")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Mechanical
                  </span>
                </li>
                <li data-filter=".filter-item"
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={() => toggleTab("tab4")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Electrical
                  </span>
                </li>
                <li data-filter=".filter-item"
                  className={activeTab === "tab5" ? "active" : ""}
                  onClick={() => toggleTab("tab5")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Surveying
                  </span>
                </li>
                {/* <li data-filter=".filter-item" className="active">
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Factory
                  </span>
                </li>
                <li data-filter=".offices">
                  <span className="filter-text">
                    {" "}
                    <i className="icon-surgery"></i>
                    Offices{" "}
                  </span>
                </li>
                <li data-filter=".interios">
                  <span className="filter-text">
                    {" "}
                    <i className="icon-line-chart"></i>
                    Survey
                  </span>
                </li>
                <li data-filter=".bulding">
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hotel"></i>
                    Buildings
                  </span>
                </li> */}
              </ul>
            </div>
            {/* end project menu box */}
          </div>
        </div>

        <div className="row filter-layout masonary-layout">
          {/* project one */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item factory bulding">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project1} alt="" />
                </div>
                <div className="content-box">
                  <h2>Welding</h2>
                  <p>Welding of polines</p>
                </div>
              </div>
            </div>
          </div>

          {/* project two */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios offices factory">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project2} alt="" />
                </div>
                <div className="content-box">
                  <h2>Installation</h2>
                  <p>Installing of plumbing pipes</p>
                </div>
              </div>
            </div>
          </div>

          {/* project three */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item interios factory bulding">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project5} alt="" />
                </div>
                <div className="content-box">
                  <h2>Installation</h2>
                  <p>Fabrication and Installation of safety cart ladder</p>
                </div>
              </div>
            </div>
          </div>

          {/* project 4 */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project6} alt="" />
                </div>
                <div className="content-box">
                  <h2>Renovation</h2>
                  <p>Renovations of Realfruits factory Abeokuta</p>
                </div>
              </div>
            </div>
          </div>

          {/* project 5 */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={installation} alt="" />
                </div>
                <div className="content-box">
                  <h2>Installation</h2>
                  <p>Installation of panel mesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* project 6 */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={civilWork} alt="" />
                </div>
                <div className="content-box">
                  <h2>Civil Construction</h2>
                  <p>Casting of Reinforced floor</p>
                </div>
              </div>
            </div>
          </div>

          {/* project 7 */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project3} alt="" />
                </div>
                <div className="content-box">
                  <h2>Renovation</h2>
                  <p>Renovation of factory at real fruit Ltd. Ogun state</p>
                </div>
              </div>
            </div>
          </div>

          {/* project 8 */}
          <div className="col-xl-3 col-lg-3 col-md-6 filter-item bulding offices">
            <div className="project-one__single">
              <div className="project-one__single-img">
                <div className="inner">
                  <img src={Project4} alt="" />
                </div>
                <div className="content-box">
                  <h2>Renovation</h2>
                  <p>Renovations of Realfruits factory Abeokuta</p>
                </div>
              </div>
            </div>
          </div>
          {/* end project */}
        </div>
      </div>
    </section>
  );
};

export default FullProjects;
