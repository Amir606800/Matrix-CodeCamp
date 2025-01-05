import React from "react";
import Website1 from "./../../assets/Images/Ecommerce1.png"
import Website2 from "./../../assets/Images/Website2.png"
import Website3 from "./../../assets/Images/SandBox1.png"
import Website4 from "./../../assets/Images/SandBox2.png"


const Portfolio = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
            />
          <span>My Portfolio</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
          Innovation Designs{" "}
          <p className="ps-5">
            Real <span className="">Results</span>
          </p>
        </div>
        <div className="showStand">
           <PortfolioCard img={Website1} name={"Grogin eCommerce Site Clone"} link={"https://chimerical-crumble-d839e3.netlify.app/"} />
            <div className="row2 d-flex justify-content-center gap-4 align-items-center " >
                <div className="col-lg-6"><PortfolioCard img={Website3} name={"SandBox Website Clone"} wid={"26em"} /></div>
                <div className="col-lg-6"><PortfolioCard img={Website4} name={"SandBox Website clone(2)"} wid={"26em"} /></div>
            </div>
           <PortfolioCard img={Website2} name={"Bookapp Website Clone"} link={"https://comforting-chaja-a05c4d.netlify.app/"} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;

const PortfolioCard = (props) => {
  return (
    <>
      <div
        className="picture w-100 text-center overflow-hidden mb-2 mt-5"
        data-aos="zoom-in"
      >
        <a target={props.link ? "_blank" : "_self"} href={props.link || "#"}>
          <img
            src={props.img}
            alt="Website1"
            style={{ maxWidth: "100%", borderRadius: "20px" }}
          />
        </a>
        <div className="image-title fs-2  fw-bold w-100">{props.name}</div>
      </div>
    </>
  );
};