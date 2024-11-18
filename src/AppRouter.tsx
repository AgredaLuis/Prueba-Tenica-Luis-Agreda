import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound";
import { Login } from "./Pages/Public/Login";
import Home from "./Pages/Public/Home/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
