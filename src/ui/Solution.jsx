import styled from "styled-components";

const StyldeLayout = styled.div`
  width: 100vh;
  position: relative;
  display: block;
  padding: 6rem 2rem;

  z-index: -1;
  @media (min-width: 768px) {
    width: 100%;
    padding: 6rem 8.5rem 8rem 8.5rem;
  }
`;

const StyledTopic = styled.h4`
  text-align: center;
  font-size: 6.4rem;

  margin-bottom: 2.5rem;
`;

const StyldeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyldeList = styled.div`
  display: grid;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledListTopic = styled.h6`
  font-size: 3.2rem;
  margin: 1.5rem 0rem;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  font-size: 1.6rem;
  padding-left: 1.4rem;

  @media (min-width: 768px) {
    padding-left: 7.4rem;
  }
`;

const BorderBox = styled.div`
  @media (min-width: 1350px) {
    width: 100vh;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    max-width: 127rem;
    height: 50rem;
    border: 0.2rem solid var(--color-brand--1);

    z-index: -1;
  }
`;

function Solution() {
  return (
    <>
      <StyldeLayout>
        <StyledTopic>Solution</StyledTopic>
        <StyldeContainer>
          <StyldeList>
            <img src="s1.png" alt="s1" />
            <StyledListTopic>3D Art</StyledListTopic>
          </StyldeList>
          <StyldeList>
            <img src="s2.png" alt="s2" />
            <StyledListTopic>3D Animation</StyledListTopic>
            <StyledUl>
              <li>For presentation</li>
              <li>For media</li>
              <li>For game</li>
            </StyledUl>
          </StyldeList>
          <StyldeList>
            <img src="s3.png" alt="s3" />
            <StyledListTopic>3D Game</StyledListTopic>
            <StyledUl>
              <li>NFT</li>
              <li>Online</li>
              <li>Offline</li>
              <li>Website</li>
            </StyledUl>
          </StyldeList>
        </StyldeContainer>
        <BorderBox />
      </StyldeLayout>
    </>
  );
}

export default Solution;
