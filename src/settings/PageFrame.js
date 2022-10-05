import { Sidebar, Header } from "../components/Index";
import { Outlet } from "react-router-dom";

export function PageFrame() {
  return (
    <div className="baseContainer"> 
      <Sidebar />
        <div className="homeContainer">
          <Header />
          <Outlet />
        </div>
    </div>
  );
}