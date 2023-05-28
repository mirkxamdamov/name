import { useLocation } from "react-router-dom";
import { HomeNav } from "../../components/home/nav";
import { InvoicesPage } from "../../components/invoices-page";

export const Invoices = ({ arr, token }) => {
  return (
    <div className="d-flex h-100 bg-light">
      <HomeNav className="h-100" />
      <InvoicesPage obj={arr} token={token} />
    </div>
  );
};
