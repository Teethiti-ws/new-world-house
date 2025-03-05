import Project from "./Project";

function ProjectContent() {
  return (
    <section id="project">
      <Project
        id="project"
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
    </section>
  );
}

export default ProjectContent;
