import styled from "styled-components";

const StayledBanner = styled.div`
  width: 100vh;
  justify-content: center;
  text-align: center;
  background-color: var(--color-brand--2);

  padding: 6rem 1.8rem 6rem 1.8rem;

  @media (min-width: 732px) {
    width: 100%;
    display: inline-block;
    justify-content: center;
    align-items: center;
  }
`;

function Banner() {
  return (
    <section id="home">
      <StayledBanner>
        <h1 style={{ fontSize: "3.8rem" }}>PRODUCTION HOUSE</h1>
        <h2 style={{ fontSize: "10rem" }}>IN METAVERSE</h2>
        <p style={{ fontSize: "2rem" }}>
          3D SOLUTION LIKE 3D Digital art, 3D Animation, 3D Game
        </p>
        <button className="btn btn-white" style={{ margin: "4.4rem" }}>
          Discover More &raquo;
        </button>
      </StayledBanner>
    </section>
  );
}

export default Banner;
