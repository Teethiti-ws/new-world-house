import styled from "styled-components";
import Banner from "../ui/Banner";
import Solution from "../ui/Solution";
import Project from "../ui/Project";

const StyledMainContent = styled.div`
  display: block;
  justify-centent: center;
`;

function Homepage() {
  return (
    <StyledMainContent>
      <Banner />
      <Project
        projectName={"UNKNOWN PLANET"}
        year={"2022"}
        detailConcept={
          "There are still many planets in the galaxy that are waiting for you."
        }
        imgPath={"/img1.png"}
        reverse
      />
      <Project
        projectName={"METAVERSE YOUTUBE"}
        year={"2022"}
        detailConcept={
          "There are still many planets in the galaxy that are waiting for you."
        }
        imgPath={"/img2.png"}
      />
      <Solution />
    </StyledMainContent>
  );
}

export default Homepage;
