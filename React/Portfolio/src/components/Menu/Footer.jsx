import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer container w-75 mt-2 mb-2 d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={props.image} alt="Logo" />
        </div>
        <div className="copyright">© 2024 OVRO. All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
