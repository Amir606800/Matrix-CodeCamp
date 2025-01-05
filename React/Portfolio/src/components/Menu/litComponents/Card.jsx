import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="social-icons col d-flex flex-wrap flex-lg-nowrap card mt-2" data-aos="fade-left">
        {props.img 
          ? <img src={props.img} alt="" />
          : ""}
        <div className="context">
        <div className="card-title">{props.title}</div>
        <div className="card-text">{props.text}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
