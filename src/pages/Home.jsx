import Btns from "../components/Btns";
import Clavs from "../components/Clavs";
import Navbar from "../layout/Navbar";

function Home({navName}) {
  return (
    <div className="h-full home">
    <Navbar />
    <Clavs />
     <Btns />
    </div>
  );
}

export default Home;
