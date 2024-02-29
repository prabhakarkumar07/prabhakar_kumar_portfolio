import React from "react";
import projects from "./Data/projects.json";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <div className="container projects my-3" id="project">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => (
            <div
              className="card_size my-4  col-sm-6 col-md-4 col-lg-3 mx-4"
              key={data.id}
            >
              <div
                className="card bg-dark text-light"
                style={{
                  width: "20rem",
                  border: "2px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={`/assets/${data.imageSrc}`}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "250px", height: "200px" }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a href={data.source} className="btn btn-primary">
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
