import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  // flex: 1;
  // justify-content: center;
  justify-content: space-around;
  gap: 10rem;
  padding: 8rem 9rem;
  // height: 100vh;
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

function ProjectLayout() {
  return (
    <StyledContent>
      <StyledText></StyledText>
      <StyledImg src="/img1.png" alt="PROJECT UNKNOWN PLANET" />
    </StyledContent>
  );
}

export default ProjectLayout;
export { StyledContent, StyledText, StyledImg };
