import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10rem;
  padding: 8rem 9rem;
`;
const StyledText = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const StyledImg = styled.img`
  width: 41.3rem;
  height: 42.7rem;
`;

const Project = ({
  projectName,
  year,
  detailConcept,
  imgPath,
  reverse = false,
}) => {
  const ElementText = (
    <StyledText>
      <h6 style={{ fontSize: "4rem" }}>PROJECT</h6>
      <h4 style={{ fontSize: "6.6rem" }}>{projectName}</h4>
      <p style={{ fontSize: "2.9rem" }}>YEAR: {year}</p>
      <p style={{ fontSize: "2rem", marginTop: "3rem" }}>
        <span style={{ fontWeight: "600" }}>CONCEPT</span>: {detailConcept}
      </p>
    </StyledText>
  );

  const ElementImg = <StyledImg src={imgPath} alt={projectName} />;

  const projectOutput = (
    <StyledContent>
      {reverse ? ElementText : ElementImg}
      {reverse ? ElementImg : ElementText}
    </StyledContent>
  );

  return <>{projectOutput}</>;
};

export default Project;
