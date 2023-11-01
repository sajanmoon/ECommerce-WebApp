import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FCF5ED] grid place-content-center p-4 bottom-0 left-0 right-0 mt-[70vh]">
        <div className="links flex space-x-4 text-3xl mx-auto max-w-7xl">
          <div>
            <a href="https://www.linkedin.com/in/sajan-moon/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/SajanMoon2" target="_blank">
              <AiFillTwitterSquare />
            </a>
          </div>
          <div>
            <a href="http://github.com/sajanmoon" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <h1>© 2023 Sajan Moon. All rights reserved</h1>
      </div>
    </>
  );
};

export default Footer;
