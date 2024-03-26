import React from "react";
import "./Contactus.css";
import FB from "../Media/Images/fb1.png";
import WA from "../Media/Images/wa1.png";
import IG from "../Media/Images/insta1.png";
import TW from "../Media/Images/tw1.png";
import YT from "../Media/Images/yt1.png";
import LN from "../Media/Images/link1.png";

function Contactus() {
  return (
    <>
      <div className="contactBase">
        <div>
          <h1>Contact Us</h1>
        </div>
        <div className="contact">
          <div className="contactform">
            <h2>Get in Touch with us</h2>
            <p>We would love to work for you.</p>
            <hr />
            <form action="" className="enquiry">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="number" placeholder="Mobile or Phone Number" />
              <input type="text" placeholder="Company Name" />
              <textarea
                name=""
                id=""
                cols="60"
                rows="20"
                placeholder="Describe your Requiremnets in Detail"
              ></textarea>
            </form>
            <div>
              <button type="submit">Send Enquiry</button>
              {/* <button type='reset'>Clear Form</button> */}
            </div>
          </div>
          <div className="contactdetail">
            <h2>Corporate Office</h2>
            <p>We would love to hear from you.</p>
            <hr />

            <div>
              <div className="officedetail">
                <span className="material-symbols-outlined">location_on</span>
                <address>
                  Plot No. 45-46, Deep Palace, <br />
                  Nipania Road Near Dewas Naka,
                  <br /> Indore-452010 M.P{" "}
                </address>
              </div>
              <div className="officedetail">
                <span className="material-symbols-outlined">mail</span>
                <p>ocean.microplast@gmail.com </p>
              </div>
              <div className="officedetail">
                <span className="material-symbols-outlined">smartphone</span>
                <div>
                  <p>Dilip R. Singh</p>
                  <p>+91 9977621122</p>
                </div>
              </div>
              <div className="officedetail">
                <span className="material-symbols-outlined">smartphone</span>
                <div>
                  <p>Jitendra Singh</p>
                  <p>+91 9806618800</p>
                </div>
              </div>
            </div>
            <div className="socialMedia">
              <h4>Follow Us on:</h4>
              <ul>
                <li>
                  <a href="">
                    <img src={WA} alt="" />
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={FB} alt="" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={IG} alt="" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={LN} alt="" />
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={YT} alt="" />
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={TW} alt="" />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
