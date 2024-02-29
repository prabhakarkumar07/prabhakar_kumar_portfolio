import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
const Contact = () => {
  return (
    <>
      <div className="container contact my-3 " id="contact">
        <h1> Contact Me</h1>
        <div className="contact-icon">
          <a
            href="https://www.linkedin.com/in/prabhakar-kumar-040644214/"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>

          <a href="https://github.com/prabhakarkumar07" className="items">
            <FaGithubSquare className="icons" />
          </a>

          <a href="https://twitter.com/home" className="items">
            <BsTwitterX className="icons" />
          </a>
          <a href="mailto:prabhakarkumarcs2023@gmail.com" className="items">
            <CgMail className="icons" />
          </a>
          <a href="tel:8271960148" className="items">
            <IoCall className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
