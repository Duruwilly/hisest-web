import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import contactBg from "../assets/images/contactBg.jpg";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import IcomoonReact from "icomoon-react";
import iconSet from "../../src/selection.json";
import { toast } from "react-toastify";
import {
  validateEmail,
  validateFullName,
  validatePhone,
} from "../components/Validations";
import InlineError from "../components/InlineError";
import { SendEmail } from "../API";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [send, setSend] = useState();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, email, phone, subject, message } = formData;

  useEffect(() => {
    // ****** Validation ******
    validateFullName({ name, setNameError });
    validateEmail({ email, setEmailError });
    validatePhone({ phone, setPhoneError });

    // *******
  }, [name, email, phone, subject, message]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!nameError & !emailError & !phoneError) {
      SendEmail({ name, email, phone, subject, message, setSend });
      toast.success("Message sent successfully");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    
    
  };

  return (
    <>
      {/* start header */}
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content">
                  <h2>Contact Us</h2>
                  <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header */}

      {/* contact and address section */}
      <section className="contact-page">
        <div className="container">
          <div className="row">
            {/* cpntact page content */}
            <div className="col-xl-4 col-lg-4 col-md-5">
              <div className="contact-page__content">
                <div className="title">
                  <h2>Get In Touch</h2>
                  <p>
                    Feel free to request for a quote related to our services
                  </p>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="location2"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Address</h2>
                      <p>
                        5, Unity Close, Amadiya,
                        <br />
                        Abule -Egba, Lagos State
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="phone"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Phone</h2>
                      <p className="number1">
                        <a href="tel:+2348068128586">+234(0) 80 6812 8586</a>
                      </p>
                      <p className="number2">
                        <a href="tel:+2348050568433">+234(0) 80 5056 8433</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-page__content-single">
                  <div className="contact-page__content-single-inner">
                    <div className="icon-box">
                      <IcomoonReact
                        iconSet={iconSet}
                        icon="envelop"
                        color="green"
                        size={40}
                      />
                    </div>

                    <div className="content-box">
                      <h2>Email </h2>
                      <p className="email1">
                        <a href="mailto:info@hisestech.com">
                          info@hisestech.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end contact page content */}

            {/* start contact form */}
            <div className="col-xl-8 col-lg-8 col-md-7">
              <div className="contact-page__form">
                <form
                  className="comment-one__form contact-form-validated"
                  onSubmit={submitForm}
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          id="name"
                          type="text"
                          placeholder="Full name"
                          name="name"
                          value={name}
                          onChange={onChange}
                          required
                        />
                        {nameError && <InlineError error={nameError} />}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          id="email"
                          type="email"
                          placeholder="Email address"
                          name="email"
                          value={email}
                          onChange={onChange}
                          required
                        />
                        {emailError && <InlineError error={emailError} />}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          id="tel"
                          type="tel"
                          placeholder="Phone"
                          name="phone"
                          value={phone}
                          onChange={onChange}
                          required
                        />
                        {phoneError && <InlineError error={phoneError} />}
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={subject}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box text-message-box">
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          value={message}
                          onChange={onChange}
                          required
                        ></textarea>
                      </div>
                      <button
                        disabled={nameError || emailError || phoneError}
                        className="thm-btn comment-form__btn"
                        data-text="Send Message"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* end contact page form */}
          </div>
        </div>
      </section>
      {/* end contact page */}
    </>
  );
};

export default Contact;
