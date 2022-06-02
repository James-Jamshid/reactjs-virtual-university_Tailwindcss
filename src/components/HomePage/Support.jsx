import React from "react";
import first from "../img/first.png";
import second from "../img/second.png";
import third from "../img/third.png";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="flex justify-evenly p-20 ">
      <div className="flex flex-col items-center justify-center gap-y-2 ">
        <img
          src={first}
          alt=""
          className="flex w-[300px] h-[180px] rounded-xl shadow-lg"
        />
        <Link to="/btn">
          <h5 className="text-[#030F4B] text-[20px]">24/7 Support</h5>
        </Link>
        <p>Always online to help you</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2  ">
        <img
          src={second}
          alt=""
          className="flex w-[300px] h-[180px] rounded-xl shadow-lg"
        />
        <Link to="/btn">
          <h5 className="text-[#030F4B] text-[20px]">Secure Payments</h5>
        </Link>
        <p>Pay your semesters fast & secure</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-2  ">
        <img
          src={third}
          alt=""
          className="flex w-[300px] h-[180px] rounded-xl shadow-lg"
        />
        <Link to="/btn">
          <h5 className="text-[#030F4B] text-[20px]">Online Lectures</h5>
        </Link>
        <p>Study in real time, review later</p>
      </div>
    </div>
  );
};

export default Support;
