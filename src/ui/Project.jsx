import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;
    padding: 2rem 4rem;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 41.3rem;
  height: auto;
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
      <h6 style={{ fontSize: "2rem" }}>PROJECT</h6>
      <h4 style={{ fontSize: "3rem" }}>{projectName}</h4>
      <p style={{ fontSize: "1.5rem" }}>YEAR: {year}</p>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
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
