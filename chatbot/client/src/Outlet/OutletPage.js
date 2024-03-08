import { Outlet } from "react-router-dom";
import Header from "../components/web_components/header";

const OutletPage = () => {
  return (
    <div className="tyn-root">
      <Header />
      <Outlet />
    </div>
  );
};
export default OutletPage;
