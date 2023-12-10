import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import { Collections, Home, Swatch } from "./pages";

const Placeholder: FC = () => <div>temp</div>;

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
