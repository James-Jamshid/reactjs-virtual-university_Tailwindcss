import React from "react";
import students from "../img/students.png";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[1100px] h-[150px] bg-[#FCFCFF] shadow-xl rounded-2xl items-center justify-center gap-x-8 ">
        <Link to="/btn">
          <h2>Interested? Let’s get you started</h2>
        </Link>
        <Link to="/btn">
          <button className="flex w-[150px] h-[50px] bg-[#FD4455] hover:bg-[#055a09] text-[white] shadow-lg rounded-lg items-center justify-center">
            Register
          </button>
        </Link>
      </div>
      <img src={students} alt="" className="flex" />
    </div>
  );
};

export default Bottom;
