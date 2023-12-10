import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface SwatchProps {}

const Swatch: FC<SwatchProps> = () => {
  return (
    <>
      <div>Swatch</div>
      <Link to={ROUTES.home.path}>Home</Link>
    </>
  );
};

export { Swatch };
export type { SwatchProps };
