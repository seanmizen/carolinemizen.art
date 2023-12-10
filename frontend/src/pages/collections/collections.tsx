import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface CollectionsProps {}

const Collections: FC<CollectionsProps> = () => {
  return (
    <>
      <div>Collections</div>
      <Link to={ROUTES.home.path}>Home</Link>
    </>
  );
};

export { Collections };
export type { CollectionsProps };
