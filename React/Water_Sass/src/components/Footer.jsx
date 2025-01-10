import React from "react";
import { BsMailbox } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="background"></div>
          <div className="inner">
            <div className="title">
              <span>Water Delivery 20 k.m. Free</span>
              <span> Service</span>
            </div>
            <div className="subtitle">
              <span>
                Nunc molestie mi nunc, nec accumsan libero dignissim sit amet.
              </span>{" "}
              <span>
                Fusce sit amet tincidunt metus. Nunc eu risus suscipit massa
                dapibu.
              </span>
            </div>
            <button>Read More</button>
          </div>
        </div>
        <div className="bottom">
          <div className="subtop">
            <div className="left">
              <div className="title">Newsletter</div>
              <div className="subtitle">
                Nullam condimentum varius ipsum at viverra. Donec tortor metus,
                sollicitudin vitae est id, ullamcorper pretium tortor.
              </div>
            </div>
            <div className="right">
              <input type="text" placeholder="Enter Your Email Adress..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <hr />
          <div className="mid">
            <div className="head">
              <img
                src="https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png"
                alt="Logo"
              />
              <p>Donec vel ligula ornare, finibus ex</p>{" "}
              <p>at, vive risus. Aenean velit ex,</p>{" "}
              <p>finibus elementum eu, dignissim</p>
              <p>varius augue.</p>
              <div className="bot">www.fresh@water.com</div>
            </div>

            <div className="cols">
              <div className="head">Information</div>
              <div className="list">
                <ul>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>Delivery Management</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Condition</li>
                </ul>
              </div>
            </div>
            <div className="cols">
              <div className="head">Our Services</div>
              <div className="list">
                <ul>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>Wishlist</li>
                  <li>Newsletter</li>
                  <li>Returns</li>
                </ul>
              </div>
            </div>
            <div className="cols">
              <div className="head">Recent News</div>
              <div className="qutu">
                <h3 className="bas">Nullam condimenum varius ipsum.</h3>
                <p className="altbas"> 15 Aug 2018</p>
              </div>
              <div className="qutu">
                <h3 className="bas">Nullam condimenum varius ipsum.</h3>
                <p className="altbas"> 15 Aug 2018</p>
              </div>
            </div>
            <div className="cols">
              <div className="head">Get In Touch</div>
              <div className="qutu1">
                <h3 className="bas"><CiLocationOn /> Fresh Water</h3>
                <p className="altbas-son" style={{marginTop:"-10px",marginLeft:"17 px"}}><span>45 Grand Central Terminal</span> <span> New York.</span></p>
                <p className="altbas"><PiPhoneCallBold /> +0012345789</p>
                <p className="altbas"><BsMailbox /> freshwater@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
