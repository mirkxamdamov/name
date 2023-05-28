import { Link, useNavigate, useParams } from "react-router-dom";
import left from "../../assets/left-left.png";
import "./invoces-page.css";
export const InvoicesPage = ({ obj, token }) => {
let navigate = useNavigate()
  let params = useParams()
  const onDelete = () => {
    if (token) {
      fetch(import.meta.env.VITE_API_URL + `/invoices/${params.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
        },
      });
    } else {
      console.log(params.id);
    }
  };
  return (
    obj.map(obj => {
       if (obj.id == params.id) {
         return (
           <div className="invoices__container" key={params.id}>
             <Link to="/" className="text-black text-decoration-none">
               <img src={left} alt="" /> Go back
             </Link>
             <div className="invoices mt-3 d-flex align-items-center gap-3">
               <h5>Status</h5>
               {obj.paid ? (
                 <div className="status__paid">
                   <i className="fa-solid fa-circle"></i> Paid
                 </div>
               ) : (
                 <div className="status__pending">
                   <i className="fa-solid fa-circle"></i> Pending
                 </div>
               )}
               <div className="invoices__buttons">
                 <button
                   onClick={navigate.bind(null , `/${params.id}/edit`)}
                   className="btn btn-light rounded-5 px-3 py-2"
                 >
                   edit
                 </button>
                 <button
                   className="btn btn-danger rounded-5 px-3 py-2"
                   onClick={onDelete}
                 >
                   Delete
                 </button>
                 <button className="btn-purple rounded-5 px-3 py-2">
                   Mark as Paid
                 </button>
               </div>
             </div>
             <div className="invoices__information mt-5 p-5">
               <div className="invoices__information__Graphic-Design">
                 <h4>#XM9141</h4>
                 <p>Graphic Design</p>
               </div>
               <div className="d-flex gap-5 my-5">
                 <div className="invoices__information__Invoice-Date">
                   <p>Invoice Date</p>
                   <h4>{obj.createdDate}</h4>
                 </div>
                 <div className="invoices__information__Bill-To">
                   <p>Bill To</p>
                   <h4>{obj.to}</h4>
                 </div>
                 <div className="invoices__information__Send-To">
                   <p>Bill To</p>
                   <h4>{obj.email}</h4>
                 </div>
               </div>
               <div className="invoices__information__Payment-Due">
                 <p>Payment Due</p>
                 <h4>{obj.deuDate != undefined ? obj.deuDate : obj.dueDate}</h4>
                 <div className="invoices__information__amount-due">
                   <p>Amount Due</p>
                   <h2>£ {obj.price}</h2>
                 </div>
               </div>
             </div>
           </div>
         );
        }
    })
    );
};
