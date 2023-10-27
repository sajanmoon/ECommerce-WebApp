import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-9xl">404</h2>
          <p className="">
            The Page you are looking for doesnot exist.
            <br />
            But you can click the below button to go to home page
          </p>
          <NavLink to="/" >
            <button className="bg-blue-400 rounded mt-6 text-3xl mb-9">
              SHOP NOW
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
