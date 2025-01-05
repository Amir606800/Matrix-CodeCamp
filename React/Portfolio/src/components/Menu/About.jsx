import React from "react";
import Card from "./litComponents/Card";
import { BsTwitterX } from "react-icons/bs";
import { CgDribbble } from "react-icons/cg";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";

const About = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
          />
          <span>About Me</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Crafting Seamless{" "}
          <p>
            User <span>Experiences</span>
          </p>
        </div>
        <Card
          title={"Alex Carry"}
          text={`Hi, I'm Alex Carry, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences. I specialize in crafting user-centered designs that enhance engagement and drive results. By combining research, creativity, and technical skills, I deliver solutions that not only look great but also function seamlessly.`}
        />
        <div className="cards p-3">
          <div className="row mt-4 d-flex flex-sm-row justify-content-center flex-column gap-4">
            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg"
              }
              title={"UI/UX Design"}
              text={`Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.`}
            />

            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg"
              }
              title={"User Research & Prototyping"}
              text={`Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.`}
            />
          </div>
          <div className="row mt-4 d-flex flex-sm-row justify-content-center flex-column gap-4">
            <Card
            
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg"
              }
              title={"Responsive Web Design"}
              text={`Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.`}
            />
            <Card
              img={
                "https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg"
              }
              title={"Wireframing & Visual Design"}
              text={`Creating detailed wireframes and visually stunning designs to bring ideas into focus.`}
            />
          </div>
          <div className="bottom d-flex flex-xl-nowrap justify-content-center flex-wrap flex-row gap-3 mt-4">
            <div className="column d-flex flex-column ">
              <h2 className="mb-3">Work Experience</h2>

              <div
                className="card d-flex flex-column mb-3"
                data-aos="zoom-in-up"
              >
                <div className="job d-flex flex-column gap-1">
                  <h6 className="year text-gray">2015-2020</h6>
                  <h4 className="job-name">UI/UX Designer</h4>
                  <h6 className="company text-gray">Creative Spark Agency</h6>
                </div>

                <div className="job mt-4 d-flex flex-column gap-1">
                  <h6 className="year text-gray">2020-present</h6>
                  <h4 className="job-name">Senior UI/UX Designer</h4>
                  <h6 className="company text-gray">Creative Spark Agency</h6>
                </div>
              </div>

              <div className="card text-center flex-column justify-content-center align-items-center" data-aos="zoom-in-up">
                <h3>Stay With Me</h3>
                <div className="social flex-wrap justify-content-around w-75">
                  <BsTwitterX className="social-icons" />
                  <FaInstagram className="social-icons" />
                  <FaFacebookF className="social-icons" />
                  <GrLinkedin className="social-icons" />
                  <CgDribbble className="social-icons" />
                </div>
              </div>
            </div>
            <div className="column">
              <h2 className="mb-3">Education</h2>

              <div className="card d-flex flex-column" data-aos="zoom-in-up">
                <div className="educ d-flex flex-column gap-2">
                  <h6 className="year text-gray">2010-2013</h6>
                  <h4 className="job-name">
                    Bachelor's Degree in Graphic Design
                  </h4>
                  <h6 className="company text-gray">
                    University of California
                  </h6>
                </div>

                <div className="educ mt-4 d-flex flex-column gap-2">
                  <h6 className="year text-gray">2013-2015</h6>
                  <h4 className="job-name">
                    Master's Degree in User Experience Design
                  </h4>
                  <h6 className="company text-gray">
                    Massachusetts Institute of Technology (MIT)
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
