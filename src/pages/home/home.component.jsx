import "./home.css";
import plus from "../../assets/plus.svg";
import { useRef } from "react";
import { HomeNav } from "../../components/home/nav";
import { Test } from "../../components/home/test";
import { Link } from "react-router-dom";

export const Home = ({ arr , token}) => {
    const value = useRef('all');
  return (
    <header className="d-flex parent__home__page">
      <HomeNav />
      <section className="py-5 nav__section">
        <header>
          <nav className="d-flex align-items-center Nav">
            <div>
              <h2>Invoices</h2>
              <small className="small__text">There are 6 total invoices</small>
            </div>
            <div className="d-flex gap-5 align-items-center section__btn ">
              <select className="Select__status" ref={value}>
                <option className="all" value="all" name="all">
                  All
                </option>
                <option className="pending" value="pending" name="pending">
                  Pending
                </option>
                <option className="paid" value="paid" name="paid">
                  Paid
                </option>
              </select>
              <Link
                to="/add"
                className="btn__drop align-items-center d-flex gap-3 ps-2 "
              >
                <img src={plus} alt="" /> New Invoice
              </Link>
            </div>
          </nav>
          <div className="sidebar">
            <Test arr={arr} token={token} />
          </div>
        </header>
      </section>
    </header>
  );
};
