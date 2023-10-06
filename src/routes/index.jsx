import { Route, Routes } from "react-router-dom";
import CustomerIdentify from "../pages/CustomerIdentify";
import Error from "../pages/Error";
import Home from "../pages/Home";

function RoutesApp() {
  return (
        <Routes>
            <Route path="/" element={<CustomerIdentify />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
  )
}

export default RoutesApp;