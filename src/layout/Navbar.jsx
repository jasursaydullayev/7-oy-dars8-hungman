import burger from "../img/burger.svg";
import hurt from "../img/hurt.svg";
function Navbar() {
  return (
    <div className="flex items-center nav-wrap container justify-between">
      <div className="pt-[10px] flex gap-[57px] ">
        <img
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="home-burg"
          src={burger}
          width={84}
          height={84}
        />
        <dialog
          id="my_modal_1"
          className="ml-[554px] relative  mt-[220px] start-page-bg w-[452px] h-[345px] rounded-[72px]"
        >
          <h1 className="how text-[136px]  absolute bottom-[80px] ml-[90px]">
            Paused
          </h1>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="how-bnt rounded-[40px] bg-[#2463FF] shadow-sky-500 py-[12px] px-[64px] left-[160px] text-3xl tracking-wider text-white">
              continue
            </button>
          </form>
        </dialog>
        <h1 className="text-[88px] home-nav-text text-white">Countries</h1>
      </div>
      <div className="flex items-center gap-[40px]">
        <div className="w-[240px] py-[16px] mt-2 bg-white rounded-[96px]"></div>
        <img
          className="home-hurt pt-[10px]"
          src={hurt}
          width={53}
          height={48}
        />
      </div>
    </div>
  );
}

export default Navbar;
