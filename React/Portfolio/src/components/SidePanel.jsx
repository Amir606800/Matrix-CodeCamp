import "../assets/CSS/panel.css";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { CgDribbble } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";



const SidePanel = () => {
  const handleScroll = (secId) => {
    const section = document.getElementById(secId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="Panel d-flex flex-row gap-4">
        <div className="left">
          <ul className="list-unstyled d-flex flex-column gap-3 justify-content-center">
            <li
              onClick={(e) => {
                handleScroll("home");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home1.svg"
                alt="Home"
              />
              <div className="expanded">Home</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("about");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home2.svg"
                alt="Home"
              />
              <div className="expanded">About Us</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("services");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home3.svg"
                alt="Home"
              />
              <div className="expanded">Our Service</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("skills");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home4.svg"
                alt="Home"
              />
              <div className="expanded">My Skill</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("portfolio");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home5.svg"
                alt="Home"
              />
              <div className="expanded">Portfolio</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("testimonial");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home6.svg"
                alt="Home"
              />
              <div className="expanded">Testimonial</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("blog");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home8.svg"
                alt="Home"
              />
              <div className="expanded">Our Blog</div>
            </li>

            <li
              onClick={(e) => {
                handleScroll("contact");
              }}
            >
              <img
                className="panel-icons"
                src="https://html.vikinglab.agency/ovro/assets/img/icons/home7.svg"
                alt="Home"
              />
              <div className="expanded">Contact Me</div>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="card pt-3">
            <div className="card-img m-auto ">
              <img src="https://html.vikinglab.agency/ovro/assets/img/all-images/hero/hero-img1.png"></img>
            </div>
            <div className="card-body">
              <div className="card-title text-center fs-2 fw-bold">
                Alex Carry
              </div>
              <div className=" card-text text-center">
                Hi, I’m Alex, a dedicated UI/UX Designer with 10 years of
                experience creating meaningful digital experiences.
              </div>
              <div className="social justify-content-around">
                <BsTwitterX className="social-icons" />
                <FaInstagram className="social-icons" />
                <FaFacebookF className="social-icons" />
                <GrLinkedin className="social-icons" />
                <CgDribbble className="social-icons" />
              </div>
              <div className="buttonDownload text-center">
                <a href="/CV.pdf" download={"CV.pdf"}>
                  <button className="btn btn-warning text-center fs-5 fw-bold py-3 px-4 rounded-4">
                    DOWNLOAD NOW <FaDownload />
                  </button>
                </a>
              </div>
              <div className="copywirte text-center pt-3">
                © 2024 OVRO. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
