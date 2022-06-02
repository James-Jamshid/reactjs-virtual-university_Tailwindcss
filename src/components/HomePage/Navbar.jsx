import React from "react";
// import photo from "../img/background.png";
import logo from "../img/Logo.png";
import frame from "../img/Frame1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="">
        <img src={photo} alt="" className="" />
      </div> */}
      <div className="hidden md:flex p-4  ">
        <div className="flex flex-1 items-center justify-center gap-2">
          <Link to="/">
            <div className="flex gap-2 items-center cursor-pointer shadow-md hover:bg-[#055a09] rounded-full">
              <img src={logo} alt="" className="flex" />
              <h3 className="flex">Credischool</h3>
            </div>
          </Link>
        </div>
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
        <div className="flex flex-1 items-center justify-center gap-6">
          <Link to="/btn">
            <h5 className="flex">Login</h5>
          </Link>
          <Link to="/btn">
            <button className="flex w-[150px] h-[50px] bg-[#FD4455] hover:bg-[#055a09] text-[white] shadow-lg rounded-lg items-center justify-center">
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-[100px] pl-40 gap-4">
        <h1 className="flex">
          A virtual university, <br />
          with real degrees
        </h1>
        <p>
          Credischool is an accredited virtual university built <br /> by top
          professors from Harvard, Stanford, MIT, and <br /> many more. The
          students at Credischool are <br /> welcome to study at their own pace.
        </p>
        <Link to="/btn">
          <button className="flex w-[180px] h-[50px] text-[white] bg-[#335DFF] hover:bg-[#055a09]  items-center justify-center shadow-xl rounded-lg">
            Learn more
          </button>
        </Link>
      </div>
      <div className="flex justify-end pr-40">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
