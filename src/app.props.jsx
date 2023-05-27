import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { invoicesAction} from "./store/Invoices/invoices.slice";


export const useAppProps = () => {
    const dispatch = useDispatch()
    useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/invoices", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(invoicesAction))
      .catch((err) => console.log(err));
  });
  return {};
};
