import styled from "styled-components";

export const LandingPageWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
});

export const HeroLinksWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  borderTop: "1px solid var(--border-color-secondary)",
  borderBottom: "1px solid var(--border-color-secondary)",
});

export const HeroLinksRow = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "5rem",

  height: "50vh",
});

export const Body = styled("div")({
  whiteSpace: "pre-wrap",
});
