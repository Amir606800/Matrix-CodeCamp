import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>Contact Me</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Have Any Project in
          <p>
            Mind, <span>Lets Talk</span>
          </p>
        </div>
        <div className="card something p-4" data-aos="zoom-in">
          <div className="card-title">Let's Work Together!</div>
          <form className="d-flex flex-column gap-4" method="post" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="top d-flex gap-4">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="top d-flex gap-4">
              <input type="tel" placeholder="Phone Number" pattern="\+?\d{1,3} ?\d{1,3}[ -]?\d{3}[ -]?\d{4}" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <input type="number" min={0} placeholder="Your Budget (optional)" />
            <textarea placeholder="Message" className="mesage" required/>
            <div className="butan w-100 pt-3 ps-1"><button type="submit" className="px-4 rounded-5 fw-bold fs-4 py-3 btn btn-warning">Send <MdEmail /> </button></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
