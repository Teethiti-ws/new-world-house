import { StyledContent, StyledText, StyledImg } from "./ProjectLayout";

function ContentMetaverseYoutube() {
  return (
    <StyledContent>
      <StyledImg src="/img2.png" alt="PROJECT UNKNOWN PLANET" />

      <StyledText>
        <h6 style={{ fontSize: "4rem" }}>PROJECT</h6>
        <h4 style={{ fontSize: "6.6rem" }}>METAVERSE YOUTUBE</h4>
        <p style={{ fontSize: "2.9rem" }}>YEAR: 2022</p>
        <p style={{ fontSize: "2rem", marginTop: "3rem" }}>
          <span style={{ fontWeight: "600" }}>CONCEPT</span>: There are still
          many planets in the galaxy that are waiting for you.
        </p>
      </StyledText>
    </StyledContent>
  );
}

export default ContentMetaverseYoutube;
