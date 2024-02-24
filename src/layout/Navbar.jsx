import { useState } from "react";
import burger from "../img/burger.svg";
import hurt from "../img/hurt.svg";
import { Categories } from "../pages/Categories";
function Navbar() {
  return (
    <div className="flex container justify-between">
      <div className="pt-[10px] flex gap-[57px] ">
        <img src={burger} width={84} height={84} />
        <h1 className="text-[88px] text-white">Countries</h1>
      </div>
      <img className="pt-[10px]" src={hurt} width={53} height={48} />
    </div>
  );
}

export default Navbar;
