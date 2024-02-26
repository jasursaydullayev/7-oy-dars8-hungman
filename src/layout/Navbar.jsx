import { useState } from "react";
import burger from "../img/burger.svg";
import hurt from "../img/hurt.svg";
import { Categories } from "../pages/Categories";
function Navbar() {
  return (
    <div className="flex items-center nav-wrap container justify-between">
      <div className="pt-[10px] flex gap-[57px] ">
        <img className="home-burg" src={burger} width={84} height={84} />
        <h1 className="text-[88px] home-nav-text text-white">Countries</h1>
      </div>
      <img className="home-hurt pt-[10px]" src={hurt} width={53} height={48} />
    </div>
  );
}

export default Navbar;
