import styled from "styled-components";

export const Wrapper = styled("button")({
  // fon
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  padding: "1rem 0 0 0",
  backgroundColor: "var(--background-color-tertiary)",

  whiteSpace: "pre-wrap",

  "> *": {
    width: "100%",
    textAlign: "justify",
  },
});

export const Title = styled("div")({
  lineHeight: "1.5rem",
  // TODO: make this look good. possibly turn into a div so we can fade in the sides.
  borderBottom: "5px solid var(--border-color-secondary)",
  // boxShadow: "0 5px 5px rgba(50,10,200,0.1)",
});

export const Description = styled("div")({});

export const Image = styled("img")({
  width: "100%",
  maxHeight: "250px",
  height: "auto",
  objectFit: "cover",
});

export const IconRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  padding: "0.5rem",
  gap: "0.5rem",
});

export const IconWrapper = styled("div")({
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
  // padding: "0.5rem",
  // width: "100%",
  // height: "100%",
  // padding: "1rem",
  // backgroundColor: "var(--background-color-secondary)",
});
