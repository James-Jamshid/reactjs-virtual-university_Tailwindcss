import React from "react";
import { IconContext } from "react-icons";
import logo from "../img/Logo.png";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <IconContext.Provider value={{}}>
      <div className="flex justify-center  px-16 py-8">
        <div className="flex flex-1  flex-col justify-center gap-y-3 ">
          <Link to="/">
            <div className="flex gap-x-5 items-center cursor-pointer shadow-md hover:bg-[#055a09] rounded-full w-[170px]">
              <img src={logo} alt="" className="flex" />
              <h3 className="flex">Credischool</h3>
            </div>
          </Link>
          <p>
            Copyright © 2020 Credischool University. <br />
            All Right Reserved
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-y-3 ">
          <div className="flex flex-1 items-center justify-evenly shadow-sm">
            <Link to="/btn">
              <h5>Home</h5>
            </Link>
            <Link to="/btn">
              <h5>Campus</h5>
            </Link>
            <Link to="/btn">
              <h5>Education</h5>
            </Link>
            <Link to="/btn">
              <h5>Alumni</h5>
            </Link>
            <Link to="/btn">
              <h5>About</h5>
            </Link>
          </div>
          <div className="flex items-center justify-evenly shadow-sm">
            <Link to="/btn">
              <h5>Terms</h5>
            </Link>
            <Link to="/btn">
              <h5>Privacy</h5>
            </Link>
            <Link to="/btn">
              <h5>GDPR</h5>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 justify-center gap-8 pt-4 ">
          <div className="flex"></div>
          <a href="https://twitter.com">
            <FiTwitter id="icon" />
          </a>
          <a href="https://www.youtube.com">
            <FiYoutube id="icon" />
          </a>
          <a href="https://www.linkedin.com">
            <FiLinkedin id="icon" />
          </a>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
