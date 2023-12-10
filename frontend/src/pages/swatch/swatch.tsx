import { FC } from "react";
import { Nav } from "../../components/nav";

interface SwatchProps {}

const Swatch: FC<SwatchProps> = () => {
  return (
    <>
      <Nav />
      <div>
        <h2>Swatch</h2>
      </div>

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
