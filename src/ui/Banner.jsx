import styled from "styled-components";

const StayledBanner = styled.div`
  display: block;
  text-align: center;
  background-color: var(--color-brand--2);

  padding: 6rem 1.8rem 6rem 1.8rem;
`;

function Banner() {
  return (
    <StayledBanner>
      <h1 style={{ fontSize: "5rem" }}>PRODUCTION HOUSE</h1>
      <h2 style={{ fontSize: "12.9rem" }}>IN METAVERSE</h2>
      <p style={{ fontSize: "2rem" }}>
        3D SOLUTION LIKE 3D Digital art, 3D Animation, 3D Game
      </p>
      <button className="btn btn-white" style={{ margin: "4.4rem" }}>
        Discover More &raquo;
      </button>
    </StayledBanner>
  );
}

export default Banner;
