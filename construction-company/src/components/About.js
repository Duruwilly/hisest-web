import React from 'react'
import { Link } from 'react-router-dom';
import AboutBg from "../assets/images/example.jpeg";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { GrFormCheckmark } from  'react-icons/gr'

const About = () => {
  return (
    <section className="about-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-three__img">
              <div className="inner">
                <img src={AboutBg} alt="" />
              </div>
            </div>
          </div>

          {/* content */}
          <div className="col-xl-6">
            <div className="about-three__content">
              <div className="sec-title__tagline">
                <h6>ABOUT US</h6>
                <span className="right"></span>
              </div>
              <h2 className="sec-title__title">Hisest Consult and Services</h2>
            </div>
            <div className="about-three__content-inner">
              <div className="text1">
                <p>
                  HISEST Consulting and Services is a fast growing indigenous firm incorporated since 2011 with registration number (RC2185456 ). We have grown into a medium-sized independent Surveying and Engineering firm in Nigeria. We have a team of highly trained professionals which enhances our ability to offer high-quality services to our clients.
                </p>
              </div>
              <div className="text2">
                <h4>
                At Hisest, QUALITY as performance indicator is our key driver, to archive this feat; we have a team of highly trained and motivated professionals the industry can offer. We are adequately equipped with human resources, good construction tools and equipment to deliver any project within time frame, with advance technology, engineering skills, expertise and good understanding of expert design.
                </h4>
              </div>
              <ul className="about-three__content-list">
               <li>
                <div className="icon-box">
                 <GrFormCheckmark className='markk' />
                </div>
                <div className="text-box">
                 <p>Civil Construction</p>
                </div>
               </li>
               <li>
                <div className="icon-box">
                 <GrFormCheckmark />
                </div>
                <div className="text-box">
                 <p>Renovation of Commercial Office</p>
                </div>
               </li>
               <li>
                <div className="icon-box">
                 <GrFormCheckmark />
                </div>
                <div className="text-box">
                 <p>Repairing of Residential Roof</p>
                </div>
               </li>
              </ul>
              <div className="about-three__content-btn">
               <Link to='/about' className='thm-btn' data-text='Read More'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About