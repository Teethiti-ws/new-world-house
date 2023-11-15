import styled from "styled-components";

const StyldeLayout = styled.div`
  position: relative;
  display: block;

  padding: 6rem 8.5rem 8rem 8.5rem;
`;

const StyledTopic = styled.h4`
  text-align: center;
  font-size: 6.4rem;

  margin-bottom: 2.5rem;
`;

const StyldeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyldeList = styled.div`
  display: grid;
`;

const StyledListTopic = styled.h6`
  text-align: center;
  font-size: 3.2rem;

  margin: 1.5rem 0rem;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  font-size: 1.6rem;

  padding-left: 7.4rem;
`;

const BorderBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 127rem;
  height: 50rem;
  border: 0.2rem solid var(--color-brand--1);

  z-index: -1;
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
