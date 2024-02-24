import hangman from "../img/the-hangman.png";
import play from "../img/play.png";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="mt-[60px] mr-[250px]">
        <div className="absolute start-bg w-[592px] h-[500px] rounded-[72px] shadow-xl"></div>
        <img
          className="relative bottom-[100px] left-[115px]"
          src={hangman}
          width={355}
          height={163}
        />
        <Link to={"/how-play"}>
          <img
            className="relative left-[190px] bottom-[50px] cursor-pointer"
            src={play}
            alt=""
          />
          <button className="relative text-center rounded-[40px] bg-[#2463FF] shadow-sky-500 py-[12px] px-[64px] left-[160px] text-3xl tracking-wider text-white">
            HOW TO PLAY
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
