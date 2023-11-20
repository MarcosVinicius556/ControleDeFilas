import { Route, Routes } from "react-router-dom";
import CustomerIdentify from "../pages/CustomerIdentify";
import Error from "../pages/Error";
import Queue from "../pages/QueueCaller";
import Config from "../pages/Config";
import Private from "./Private";

function RoutesApp() {
  return (
        <Routes>
            <Route path="/" element={<CustomerIdentify />} />
            <Route path="/queue" element={<Private> <Queue /> </Private>} />
            <Route path="/config" element={<Config />} />
            <Route path="*" element={<Error />} />
        </Routes>
  )
}

export default RoutesApp;