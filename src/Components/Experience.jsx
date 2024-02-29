import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <div className="container exp " id="experience">
      <h1>Experience</h1>
      {experience.map((data) => (
        <div key={data.id} className="ex-items text-center">
          <div className="left">
            <img
              src={`/assets/${data.imageSrc}`}
              className="text-center"
              alt=""
            />
          </div>
          <div className="right">
            <h2>{data.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {data.startDate} {data.endDate}{" "}
              </span>
              <span style={{ color: "yellow" }}> {data.organisation} </span>
              {data.location}{" "}
            </h4>{" "}
            <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
            <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
            <h5 style={{ color: "yellow" }}>{data.experiences[2]}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
