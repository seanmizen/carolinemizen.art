import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface SwatchProps {}

const Swatch: FC<SwatchProps> = () => {
  return (
    <>
      <Link to={ROUTES.home.path}>Home</Link>
      <div>Swatch</div>

      <div>
        <div>TODO:</div>
        <ol>
          <li>Color theme presentation</li>
          <li>input, select</li>
          <li>button</li>
          <li>checkbox</li>
          <li>radio</li>
          <li>switch</li>
          <li>slider</li>
          <li>progress</li>
          <li>spinner</li>
          <li>tooltip</li>
          <li>popover</li>
          <li>dialog</li>
          <li>card</li>
          <li>table</li>
        </ol>
      </div>
    </>
  );
};

export { Swatch };
export type { SwatchProps };
