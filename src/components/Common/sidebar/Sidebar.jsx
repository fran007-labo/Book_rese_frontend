import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/lp" style={{ textDecoration: "none" }}>
          <span className="logo">Bizlink</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">User page</p>
          <Link to="dashboards/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="dashboards/users/1" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>My Reservation</span>
            </li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>My Cart</span>
            </li>
          </Link>
          <p className="title">Books page</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Books</span>
            </li>
          </Link>
          <Link to="/book/new" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Resister Book</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
