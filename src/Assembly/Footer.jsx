import React from "react";
import './Footer.css'
import FB from "../Media/Images/fb1.png";
import WA from "../Media/Images/wa1.png";
import IG from "../Media/Images/insta1.png";
import TW from "../Media/Images/tw1.png";
import YT from "../Media/Images/yt1.png";
import LN from "../Media/Images/link1.png";


function Footer() {
  return (
    <>
      <div className="footerBase">
        <div className="quickLinks">
          <h3>Site Links</h3>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Customers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="followUs">
        <div className="socialMedia">
              <h3>Follow Us on:</h3>
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
        <div className="mfgLocation">
          <ul>
            <li>01</li>
            <li>01</li>
            <li>01</li>
            <li>01</li>
            <li>01</li>
          </ul>
        </div>
        <div className="download">
          <ul>
            <li>01</li>
            <li>01</li>
            <li>01</li>
            <li>01</li>
            <li>01</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
