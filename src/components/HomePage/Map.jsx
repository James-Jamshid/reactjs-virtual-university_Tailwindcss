import React from "react";
import map from "../img/Map.png";
import frame2 from "../img/Frame2.png";
import frame3 from "../img/Frame3.png";

const Map = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="flex">
        <h1>
          More than 50.000 students <br />
          has enrolled this year
        </h1>
      </div>
      <div className="flex">
        <img src={map} alt="" className="flex w-[1400px] h-[950px]" />
      </div>
      <div className="flex ">
        <img src={frame2} alt="" className="flex w-[450px] h-[150] " />
        <img src={frame3} alt="" className="flex w-[350px] h-[150]" />
      </div>
    </div>
  );
};

export default Map;
