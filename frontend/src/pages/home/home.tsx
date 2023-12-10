import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <Link to={ROUTES.collections.path}>Collections</Link>
      <Link to={ROUTES.swatch.path}>Swatch</Link>
      <div>Home</div>
    </>
  );
};

export { Home };
export type { HomeProps };
