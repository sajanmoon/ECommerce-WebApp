import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <nav className="bg-[#efede6] flex items-center justify-between p-5 shadow-lg shadow-zinc-500/50 ">
        <NavLink to="/">
          <h1 className="text-3xl ml-9">GadgetHub</h1>
        </NavLink>
        <Navbar />
      </nav>
    </>
  );
};

export default Header;
