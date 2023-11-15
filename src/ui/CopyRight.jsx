import styled from "styled-components";

const StyledCopyRight = styled.div`
  background: var(--color-brand--footer);
  text-align: center;
  display: block;
  font-size: 1.6rem;
  padding: 2.6rem;
`;

const Line = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  background: var(--color-brand--1);
  height: 0.1vh;
  width: 150vh;
  display: block;
  transform: translate(-50%, -50%);
`;

function CopyRight() {
  return (
    <>
      <Line />
      <StyledCopyRight>Copyright © 2022. All Rights Reserved</StyledCopyRight>
    </>
  );
}

export default CopyRight;
