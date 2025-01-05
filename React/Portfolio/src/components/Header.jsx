import { IoIosMailOpen } from "react-icons/io";
import "../assets/CSS/head.css";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaMoon, FaRegSun } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      props.settingImage("https://html.vikinglab.agency/ovro/assets/img/logo/logo2.png")
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      props.settingImage("https://html.vikinglab.agency/ovro/assets/img/logo/logo1.png")

    }
  }, [theme]);

  return (
    <div className="Head">
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={props.image}
          className="logo"
          alt="logo-light"
        />
        <div className="right align-items-center d-flex gap-4">
          <div className="theme">
            
            <input
              id="check-theme"
              type="checkbox"
              className="theme-btn btn"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <label className="theme-btn btn" htmlFor="check-theme">
              <FaMoon className="theme-mon" />
              <FaRegSun className="theme-sun" />
            </label>
          </div>
          <div className="splitter d-none d-lg-block"></div>
          <div className="hire d-none d-md-block">
            <button className="hire-btn rounded-5 d-flex align-items-center gap-1 btn btn-warning fw-bold">
              <span>HIRE ME</span> <IoIosMailOpen />
            </button>
          </div>
          <div className="bars">
            <HiMiniBars3BottomLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
