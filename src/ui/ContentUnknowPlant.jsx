import { StyledContent, StyledText, StyledImg } from "./ProjectLayout";

function ContentUnknowPlant() {
  return (
    <StyledContent>
      <StyledText>
        <h6 style={{ fontSize: "4rem" }}>PROJECT</h6>
        <h4 style={{ fontSize: "6.6rem" }}>UNKNOWN PLANET</h4>
        <p style={{ fontSize: "2.9rem" }}>YEAR: 2022</p>
        <p style={{ fontSize: "2rem", marginTop: "3rem" }}>
          <span style={{ fontWeight: "600" }}>CONCEPT</span>: There are still
          many planets in the galaxy that are waiting for you.
        </p>
      </StyledText>

      {/* MARK spit image */}
      <StyledImg src="/img1.png" alt="PROJECT UNKNOWN PLANET" />
    </StyledContent>
  );
}

export default ContentUnknowPlant;
