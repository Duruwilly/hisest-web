import { useState } from "react";
import { toast } from "react-toastify";
import "../assets/vendors/bootstrap/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const Newsletter = () => {
  const [val, setVal] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing");
    setVal("");
  };
  return (
    <div className="newsletter">
      <div className="">
        <p className="footer-widget__about-text">
          To be updated with all the latest news about contructions, offers and
          special announcements.
        </p>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            required
            placeholder="Email Address"
            id="email"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button
            type="submit"
            className="thm-btn"
            data-text="Subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
