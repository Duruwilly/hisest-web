import React, { useState } from "react";
import Project1 from "../assets/images/project1.jpeg";
import Project2 from "../assets/images/project2.jpeg";
import Project5 from "../assets/images/projects5.jpeg";
import Project6 from "../assets/images/projects6.jpeg";
import Project3 from "../assets/images/services3.jpeg";
import Project4 from "../assets/images/services4.jpeg";
import installation from "../assets/images/installation2.jpeg";
import civilWork from "../assets/images/civil.jpeg";
import CivilTab from "./CivilTab";
import SurveyTab from "./SurveyTab";
import Roofing from "./Roofing";
import ElectricalTab from "./ElectricalTab";
import MechanicalTab from "./MechanicalTab";

const HalfProjects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
                <li
                  data-filter=".filter-item"
                  className={activeTab === "tab1" ? "active" : ""}
                  onClick={() => toggleTab("tab1")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Surveying
                  </span>
                </li>
                <li
                  data-filter=".filter-item"
                  className={activeTab === "tab2" ? "active" : ""}
                  onClick={() => toggleTab("tab2")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Roofing
                  </span>
                </li>
                <li
                  data-filter=".filter-item"
                  className={activeTab === "tab3" ? "active" : ""}
                  onClick={() => toggleTab("tab3")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Civil
                  </span>
                </li>
                <li
                  data-filter=".filter-item"
                  className={activeTab === "tab4" ? "active" : ""}
                  onClick={() => toggleTab("tab4")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Electrical
                  </span>
                </li>
                <li
                  data-filter=".filter-item"
                  className={activeTab === "tab5" ? "active" : ""}
                  onClick={() => toggleTab("tab5")}
                >
                  <span className="filter-text">
                    {" "}
                    <i className="icon-hammer"></i> Mechanical
                  </span>
                </li>
              </ul>
            </div>
            {/* end project menu box */}
          </div>
        </div>

        <div className="row filter-layout masonary-layout">
            {activeTab === "tab1" ? (
              <SurveyTab />
            ) : activeTab === "tab2" ? (
              <Roofing />
            ) : activeTab === "tab3" ? (
              <CivilTab />
            ) : activeTab === "tab4" ? (
              <ElectricalTab />
            ) : <MechanicalTab />}
          {/* end project */}
        </div>
      </div>
    </section>
  );
};

export default HalfProjects;
