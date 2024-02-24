import { Link } from "react-router-dom";
import back from "../img/back.png";

function HowPlay() {
  return (
    <div>
      <div className="flex items-center gap-x-[288px]">
        <Link to={"/"}>
          <img
            className="rounded-full back"
            src={back}
            alt=""
            width={64}
            height={64}
          />
        </Link>
        <h1 className="how text-[136px]">How to Play</h1>
      </div>
      <div className="flex gap-[32px]">
        <Link to={"/categories"}>
          <div className="w-[354px] lg:h-[510px] sm:h-[200px] md:h-[300px]  rounded-[40px] bg-white py-[28px] px-[40px]">
            <h1 className="text-[#2463FF] text-[88px] text-center mb-[5px]">
              01
            </h1>
            <h2 className="text-[48px] text-[#261676] tracking-[0.9px] uppercase">
              Choose a category
            </h2>
            <p className="text-[#887DC0] text-2xl tracking-[1.3px] mt-[20px] text-center">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>
        </Link>
        <Link to={"/categories"}>
          <div className="w-[354px] lg:h-[510px] sm:h-[200px] md:h-[300px]  rounded-[40px] bg-white py-[28px] px-[40px]">
            <h1 className="text-[#2463FF] text-[88px] text-center mb-[5px]">
              02
            </h1>
            <h2 className="text-[48px] text-[#261676] text-center tracking-[0.9px] uppercase">
              Guess letters
            </h2>
            <p className="text-[#887DC0] text-2xl tracking-[1.3px] mt-[20px] text-center">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>
        </Link>
        <Link to={"/categories"}>
          <div className="w-[354px] lg:h-[510px] sm:h-[200px] md:h-[300px]  rounded-[40px] bg-white py-[28px] px-[40px]">
            <h1 className="text-[#2463FF] text-[88px] text-center mb-[5px]">
              03
            </h1>
            <h2 className="text-[48px] text-center text-[#261676] tracking-[0.9px] uppercase">
              Win or lose
            </h2>
            <p className="text-[#887DC0] text-2xl tracking-[1.3px] mt-[20px] text-center">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HowPlay;
