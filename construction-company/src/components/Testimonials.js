import React from 'react'
import '../assets/vendors/animate/animate.min.css'
import '../assets/vendors/animate/custom-animate.css'
import Heroe1 from "../assets/images/heroe1.jpg";
import Heroe2 from "../assets/images/heroe2.jpg";
import Heroe3 from "../assets/images/heroe3.jpg";
import OwlCarousel from "react-owl-carousel";
import "../assets/vendors/owl-carousel/owl.carousel.min.css";
import "../assets/vendors/owl-carousel/owl.theme.default.min.css";
import "owl.carousel";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaQuoteRight } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'

const Testimonials = () => {
 const options = {
   loop: true,
      margin: 50,
      nav: true,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: false,
      autoplayTimeout: 10000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
      },
 }; 

  return (
    <section className="testimonials-three">
     <div className="testimonials-three__img1 zoom-fade">
      <img src={Heroe1} alt="#" />
     </div>
     <div className="testimonials-three__img2 float-bob-y">
      <img src={Heroe2} alt="#" />
     </div>
     <div className="testimonials-three__img3 float-bob-y">
      <img src={Heroe3} alt="#" />
     </div>
     <div className="testimonials-three__img4 zoom-fade">
      <img src={Heroe2} alt="#" />
     </div>
     <div className="testimonials-three__img5 zoom-fade">
      <img src={Heroe1} alt="#" />
     </div>
     <div className="testimonials-three__img6 float-bob-y">
      <img src={Heroe3} alt="#" />
     </div>
     <div className="testimonials-three__img7 zoom-fade">
      <img src={Heroe1} alt="#" />
     </div>
     <div className="testimonials-three__img8 zoom-fade">
      <img src={Heroe2} alt="#" />
     </div>
     <div className="testimonials-three__img9 float-bob-y">
      <img src={Heroe3} alt="#" />
     </div>
     <div className="container">
      <div className="sec-title">
       <div className="sec-title__tagline">
        <h6>Our Testimonials</h6>
        <span className="right"></span>
       </div>
       <h2 className="sec-title__title">What Our Client Say</h2>
      </div>
      <div className="row">
       <div className="col-xl-12">
        <OwlCarousel className="testimonials-three__carousel owl-carousel owl-theme" {...options}>
         {/* testimonial one */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight  />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>
         {/* testimonial two */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>
         {/* testimonial three */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>
         {/* testimonial four */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>
         {/* testimonial five */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>
         {/* testimonial six */}
         <div className="testimonials-three__single">
          <div className="quote-icon">
           <FaQuoteRight />
          </div>
          <div className="img-box">
           <img src={Heroe1} alt="#" />
          </div>
          <div className="testimonials-three__single-inner">
           <div className="title-box">
            <h3>Johm Smith</h3>
            <span>CEO at laboratory</span>
           </div>
           <div className="text-box">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt odit nobis nisi totam perspiciatis veniam delectus nesciunt eligendi aspernatur?</p>
           </div>
           <ul className="rating-box">
            <li>
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
             <BsFillStarFill />
            </li>
           </ul>
          </div>
         </div>

        </OwlCarousel>
       </div>
      </div>
     </div>
    </section>
  )
}

export default Testimonials