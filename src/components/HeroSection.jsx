import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="">
      <div className=" flex m-20 ">
        <p className="mt-20 font-normal pr-9">
          <span className="text-6xl">
            Experience Electronics Redefined: Unleash Innovation
          </span>
          <br />
          <span>
            Discover the Future of Electronics: Unleash Innovation, Immerse in
            Unparalleled Quality. Experience our cutting-edge technology and
            elevate your everyday with GadgetHub. Explore the
            extraordinary today.
          </span>
          <br />
          <NavLink to="/products">
            <button className="bg-blue-400 rounded mt-6 text-3xl">
              <h1 className=" m-3"> SHOP NOW </h1>
            </button>
          </NavLink>
        </p>

        <img
          src="https://media.istockphoto.com/id/1133980246/photo/shopping-online-concept-shopping-service-on-the-online-web-with-payment-by-credit-card-and.jpg?s=612x612&w=0&k=20&c=joeQ74hTCWThhW6XfnBsCUc5Qp3YB868J-hyBWxGSUM="
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
