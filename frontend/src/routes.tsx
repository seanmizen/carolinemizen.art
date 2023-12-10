import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Collections, Home, Swatch } from "./pages";
import { Link } from "react-router-dom";

const Placeholder: FC = () => (
  <>
    <Link to={ROUTES.home.path}>Home</Link>
    <div>TODO</div>
  </>
);

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes location={""}>
        <Route {...ROUTES.home} Component={Home} />
        <Route {...ROUTES.collections} Component={Collections} />
        <Route {...ROUTES.collection} Component={Placeholder} />
        <Route {...ROUTES.artwork} Component={Placeholder} />
        <Route {...ROUTES.swatch} Component={Swatch} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
