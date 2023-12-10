import { FC } from "react";
import { LandingPageWrapper } from "./home.styled";
import { Nav } from "../../components/nav";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LandingPageWrapper>
        <h1>Art by Caroline</h1>
        {/* little arrow which appears after 5 seconds of screentime */}
      </LandingPageWrapper>
      <Nav />
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
      <div>Sticky</div>
    </>
  );
};

export { Home };
export type { HomeProps };
