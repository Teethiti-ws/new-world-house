import styled from "styled-components";
import Banner from "../ui/Banner";
import ContentUnknowPlant from "../ui/ContentUnknowPlant";
import ContentMetaverseYoutube from "../ui/ContentMetaverseYoutube";
import Solution from "../ui/Solution";

const StyledMainContent = styled.div`
  display: block;
  justify-centent: center;
`;

function Homepage() {
  return (
    <>
      <StyledMainContent>
        <Banner />
        <ContentUnknowPlant />
        <ContentMetaverseYoutube />
        <Solution />
      </StyledMainContent>
    </>
  );
}

export default Homepage;
