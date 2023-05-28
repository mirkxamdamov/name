import { Link, useNavigate } from "react-router-dom";
import './test.css'
import left from '../../../assets/left.png'

export const Test = ({ arr }) => {
  if (arr.length ===0) {
    return (
      <div className="text-center Not__page">
        <h2>There is nothing here</h2>
        <br />
        <p>
          Create an invoice by clicking the <br /> New Invoice button and get
          started
        </p>
      </div>
    );
  } else {
    return arr.map((obj) => {
      return (
        <div className="text-decoration-none" onClick={useNavigate().bind(null,'/' +obj.id)} key={obj.id}>
          <div className="mt-3 invoices__Item">
            <div className="gap__43px">
              <p style={{ color: "#0C0E16" }}>#RT3080</p>
              <p>{obj.deuDate != undefined ? obj.deuDate : obj.dueDate}</p>
              <p>{obj.to}</p>
            </div>
            <div
              className="gap__43px status__price"
              style={{ marginLeft: "73px" }}
            >
              <h3 style={{ color: "#0C0E16" }}>£ {obj.price}</h3>
              {obj.paid == true ? (
                <div className="status__paid">
                  <i className="fa-solid fa-circle"></i> Paid
                </div>
              ) : (
                <div className="status__pending">
                  <i className="fa-solid fa-circle"></i> Pending
                </div>
              )}
              <img src={left} alt="" />
            </div>
          </div>
        </div>
      );
    });
  }
};
