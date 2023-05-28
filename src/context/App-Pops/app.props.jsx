import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoicesAction } from "../../store/Invoices/invoices.slice";

export const useAppProps = () => {
  const dispatch = useDispatch();
  const loading = useSelector(({ invoices }) => invoices.loading);
  const arr = useSelector(({ invoices }) => invoices.invoices);
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/invoices", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(invoicesAction.setInvoices(data)))
      .catch((err) => console.log(err));
  }, [dispatch]);
  return { loading, arr };
};
