import React from "react";
import { ModeToggle } from "./theme-toggle";

const NavBar = () => {
  return (
    <div className="py-5 px-10 flex justify-between items-center">
      <h1 className="text-white text-4xl font-black tracking-wider">
        Git<span className="text-red-600">Stats</span>.
      </h1>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
