import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface CollectionsProps {}

const Collections: FC<CollectionsProps> = () => {
  return (
    <>
      <Link to={ROUTES.home.path}>Home</Link>
      <div>Collections</div>
    </>
  );
};

export { Collections };
export type { CollectionsProps };
