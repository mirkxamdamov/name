import { Route, Routes, useLocation } from "react-router-dom";
import { useAppProps } from "./context/App-Pops";
import { Home } from "./pages/home";
import "./load.css";
import { hoc } from "./utils/hook";
import { Invoices } from "./pages/invoices-page";
import { UseAuth } from "./hooks/useAuth";
import { Login } from "./pages/login";
import { Spin } from "antd";
import { New } from "./pages/new";
import { EditPage } from "./pages/edit";
export const App = hoc(useAppProps, ({ loading, arr }) => {
  const [token] = UseAuth();
  const location = useLocation();
  return (location.pathname !== "/add" && loading && token !== true) ||
    (location.pathname !== "/invoices/:id/edit" &&
      loading &&
      token !== true ) ? (
    <div className="example">
      <Spin />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<Home token={token} arr={arr} />} />
      <Route
        path="/:id"
        element={<Invoices token={token} arr={arr} />}
      />
      {token ? (
        <>
          <Route path="/add" element={<New/>} />
          <Route path="/:id/edit" element={<EditPage/>} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/add" element={<Login />} />
          <Route path="/:id/edit" element={<Login />} />
        </>
      )}
    </Routes>
  );
});
