import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <div className="layout">
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
