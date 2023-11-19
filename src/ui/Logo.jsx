import styled from "styled-components";

const Img = styled.img`
  // display: none;
  padding: 0 15rem;
  // margin: 1rem 0rem;
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

    // width: 100%;
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // padding: auto 9.9rem;
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
