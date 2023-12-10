import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "src/constants";

const Nav: FC = () => {
  return (
    <>
      <Link to={ROUTES.home.path}>Home</Link>
      <Link to={ROUTES.collections.path}>Collections</Link>
      <Link to={ROUTES.swatch.path}>Swatch</Link>
    </>
  );
};

export { Nav };
