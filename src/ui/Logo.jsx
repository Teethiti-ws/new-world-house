import styled from "styled-components";

const Img = styled.img`
  height: 6.3rem;
  width: 26.8rem;
`;

function Logo() {
  return (
    <>
      <Img src="/logo.png" alt="Logo" />
    </>
  );
}

export default Logo;
