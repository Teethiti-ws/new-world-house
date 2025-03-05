import styled from "styled-components";

const Img = styled.img`
  object-fit: contain;
  padding: 0 15rem;
  align-items: center;
  justify-content: center;
  height: 6.3rem;
  width: 26.8rem;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
    height: 6.3rem;
    width: 26.8rem;
    padding: 0;
  }
`;

function Logo() {
  return (
    <>
      <Img src="/logo.png" alt="Logo" />
    </>
  );
}

export default Logo;
