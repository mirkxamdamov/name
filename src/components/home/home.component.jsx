import "./home.css";
import logo from "../../assets/logo.svg";
import dropdown1 from "../../assets/dropdown1.svg";
import plus from "../../assets/plus.svg";
export const Home = () => {
  return (
    <header className="d-flex">
      <nav className="home">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </nav>
      <section className="py-5 section">
        <header>
          <nav className="d-flex align-items-center">
            <div>
              <h2>Invoices</h2>
              <small className="small-text">There are 6 total invoices</small>
            </div>
            <div className="d-flex gap-5 align-items-center section-btn">
              <p>
                Filter by status <img src={dropdown1} alt="" />
              </p>
              <button className="btn-drop align-items-center d-flex gap-3">
                <img src={plus} alt="" /> New Invoice
              </button>
            </div>
          </nav>
          <div className="mt91">
            <div className="invoices colorBlue">
              <div className="gap43">
                <p style={{color:'#0C0E16'}}>#RT3080</p>
                <p>Due 19 Aug 2021</p>
                <p>Jensen Huang</p>
              </div>
            </div>
          </div>
        </header>
      </section>
    </header>
  );
};
