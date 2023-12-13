import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)({
  // fon
  display: "flex",
  flexDirection: "column",
  width: "300px",
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

export const ImageContainer = styled("div")({
  width: "100%",
  // maxHeight: "250px",
  height: "200px", // Fixed height for the placeholder
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// export const Image = styled("img")({
//   width: "100%",
//   maxHeight: "250px",
//   height: "auto",
//   objectFit: "cover",
// });

export const IconRow = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  padding: "0.5rem",
  gap: "0.5rem",
});

export const IconWrapper = styled("div")({
  height: "50px",
  width: "50px",
});
