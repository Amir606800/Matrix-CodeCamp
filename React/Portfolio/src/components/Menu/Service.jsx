import React from "react";
import Card from "./litComponents/Card";

const Service = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>My Service</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Elevating Brands
          <p>
            Intuitive <span>Design</span>
          </p>
        </div>
        <Card
          title={`UI/UX Design`}
          text={`Designing intuitive, user-focused interfaces that prioritize functionality and seamless navigation.`}
        />
        <Card
          title={`User Research & Prototyping`}
          text={`Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.`}
        />
        <Card
          title={`Responsive Web Design`}
          text={`Crafting designs that adapt seamlessly across all devices, ensuring a consistent user experience.`}
        />
        <Card
          title={`Wireframing & Visual Design`}
          text={`Creating detailed wireframes and visually stunning designs to bring ideas into focus.`}
        />
      </div>
    </>
  );
};

export default Service;
