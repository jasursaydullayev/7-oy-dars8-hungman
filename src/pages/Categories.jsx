import back from "../img/back.png";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useState } from "react";

export function Categories() {
  const [navName, setNavName] = useState(null);
  return (
    <div>
      <div className="hidden">
        <Home navName={navName} />
      </div>
      <div className="all-wrapper-c flex items-center gap-x-[288px]">
        <Link to={"/"}>
          <img
            className="back rounded-full back"
            src={back}
            alt=""
            width={64}
            height={64}
          />
        </Link>
        <h1 className="how text-[136px]">Pick a Category</h1>
      </div>
      <div className=" flex flex-col categories-wrap gap-[50px] mt-[45px]">
        <div className="flex categories-wr items-center gap-[32px]">
          <Link onClick={() => setNavName("MOVIES")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase text-white text-center">
              MOVIES
            </div>
          </Link>
          <Link onClick={() => setNavName("TV SHOWS")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase  text-white text-center">
              TV SHOWS
            </div>
          </Link>
          <Link onClick={() => setNavName("COUNTRIES")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase  text-white text-center">
              COUNTRIES
            </div>
          </Link>
        </div>
        <div className="flex categories-wr items-center gap-[32px]">
          <Link onClick={() => setNavName("CAPITAL CITIES")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase  text-white text-center">
              CAPITAL CITIES
            </div>
          </Link>
          <Link onClick={() => setNavName("ANIMALS")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase  text-white text-center">
              ANIMALS
            </div>
          </Link>
          <Link onClick={() => setNavName("SPORTS")} to={"/home"}>
            <div className="w-[384px] category-name h-[190px] bg-[#2463FF] shadow-sky-600 rounded-[40px] pt-[56px] text-[48px] uppercase  text-white text-center">
              SPORTS
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
