import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="left">
          <div className="head">Leave Reply</div>
          <form>
            <div className="top">
              <div>
                <label htmlFor="nickname">Nick Name: </label>
                <input id="nickname" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email Address: </label>
                <input id="email" type="email" />
              </div>
            </div>
            <div className="bot">
              <label htmlFor="textarea">Write a message: </label>
              <textarea
                name="message"
                id="textarea"
                rows={7}
                cols={100}
              ></textarea>
            </div>
            <button id="subbit">Submit</button>
          </form>
        </div>
        <div className="right">
          <div className="head">Contact Info</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            atque vitae incidunt a culpa qui voluptas necessitatibus dolorum
          </div>
          <div className="feats-contact">
            <CiLocationOn />
            Dambo dika, USA ,road123
          </div>
          <div className="feats-contact">
            <CiMail />
            dotsee@gmail.com
          </div>
          <div className="feats-contact">
            <BiPhoneCall /> +88 012-123 34
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
