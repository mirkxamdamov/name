import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import "./nav.css";

export const HomeNav = ({ token }) => {
  return (
    <nav className="home__page">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {/* {token? } */}
      <Link to="/login">
        <i className="fa-solid fa-circle-user user__icon"></i>
      </Link>
    </nav>
  );
};
