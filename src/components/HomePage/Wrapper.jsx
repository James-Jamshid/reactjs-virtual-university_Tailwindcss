import React from "react";
import fifth from "../img/fifth.png";
import sixth from "../img/sixth.png";
import seventh from "../img/seventh.png";
import { Link } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-center p-10 ">
        <h1 className="flex">Explore the departments</h1>
      </div>
      <div className="grid gap-4 grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src={fifth}
            alt=""
            className="flex w-[450px] h-[450px] shadow-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <Link to="/btn">
            <h2 className="flex">Computer Science</h2>
          </Link>
          <p>
            Our computer science department has multiple <br /> learning paths,
            from Mobile and Web development, <br /> to Machine Learning and Data
            Science.
          </p>
          <Link to="/btn">
            <button className="flex w-[180px] h-[50px] text-[white] bg-[#335DFF] hover:bg-[#055a09]  items-center justify-center shadow-xl rounded-lg">
              Learn more
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <Link to="/btn">
            <h2 className="flex">Chemical Engineering</h2>
          </Link>
          <p>
            All of the students that are enrolled in the <br /> Chemical
            Engineering program receive a <br /> Chemist’s Kit to practice while
            learning from <br /> home.
          </p>
          <Link to="/btn">
            <button className="flex w-[180px] h-[50px] text-[white] bg-[#335DFF] hover:bg-[#055a09]  items-center justify-center shadow-xl rounded-lg">
              Learn more
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src={sixth}
            alt=""
            className="flex w-[450px] h-[450px] shadow-lg rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={seventh}
            alt=""
            className="flex w-[450px] h-[450px] shadow-lg rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-4 justify-center">
          <Link to="/btn">
            <h2 className="flex">Business & Economics</h2>
          </Link>
          <p>
            The future CEOs and Entrepreneurs <br /> have an opportunity to
            study the <br /> business climate and analyze real world <br /> case
            studies of business success stories.
          </p>
          <Link to="/btn">
            <button className="flex w-[180px] h-[50px] text-[white] bg-[#335DFF] hover:bg-[#055a09]  items-center justify-center shadow-xl rounded-lg">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
