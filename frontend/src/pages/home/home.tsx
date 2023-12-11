import { FC } from "react";
import {
  Body,
  HeroLinksRow,
  HeroLinksWrapper,
  LandingPageWrapper,
} from "./home.styled";
import { Nav } from "../../components/nav";
import { PreviewCard } from "../../components";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LandingPageWrapper>
        <h1>Art by Caroline</h1>
        {/* little arrow which appears after 5 seconds of screentime */}
      </LandingPageWrapper>
      <HeroLinksWrapper>
        <h2>Hero Links</h2>
        <HeroLinksRow>
          <PreviewCard
            title="Title"
            description={`Long description of this gallery\nwith multiple lines`}
          />
          <PreviewCard
            title="Title"
            description={`Long description of this gallery\nwith multiple lines`}
          />
          <PreviewCard
            title="Title"
            description={`Long description of this gallery\nwith multiple lines`}
          />
        </HeroLinksRow>
      </HeroLinksWrapper>
      <Nav />
      <Body>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
        <div>{`Sticky\nSticky\nSticky\nSticky\nSticky\nSticky\nSticky`}</div>
      </Body>
    </>
  );
};

export { Home };
export type { HomeProps };
