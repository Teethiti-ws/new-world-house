import Banner from "../ui/Banner";
import Solution from "../ui/Solution";
import Project from "../ui/Project";

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
