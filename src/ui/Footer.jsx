import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faLine,
} from "@fortawesome/free-brands-svg-icons";
import CopyRight from "./CopyRight";

const StyledLayout = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  gap: 15rem;
  background: var(--color-brand--footer);
  padding: 2.5rem 8.5rem;
`;

const StyledContainer = styled.div`
  display: block;
`;

const ImgFooter = styled.img`
  margin: auto 0;
  height: 6.3rem;
  width: 26.8rem;
`;

const StyledTopic = styled.p`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const StyledUl = styled.ul`
  display: grid;
  list-style-type: none;
  font-size: 1.6rem;

  li {
    margin: 0.5rem 0 0.5rem 0;
  }
`;

const StyledUlFooter = styled.ul`
  list-style-type: disc;
  font-size: 1.3rem;
  padding-left: 4.2rem;

  li {
    margin: 0.1rem 0 0.1rem 0;
  }
`;

function Footer() {
  return (
    <>
      <StyledLayout>
        <ImgFooter src="/logoFooter.png" alt="ImgFooter" />
        <StyledContainer>
          <StyledTopic>ABOUT US</StyledTopic>
          <StyledUl>
            <li>HOME</li>
            <li>PROJECT</li>
            <li>SOLUTION</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </StyledUl>
        </StyledContainer>
        <StyledContainer>
          <StyledTopic>SOLUTION</StyledTopic>
          <StyledUl>
            <li>3D Digital art</li>
            <StyledUlFooter>
              <li>For presentation</li>
              <li>For media</li>
              <li>For game</li>
            </StyledUlFooter>
            <li>3D Animation</li>
            <StyledUlFooter>
              <li>For presentation</li>
              <li>For media</li>
              <li>For game</li>
            </StyledUlFooter>
            <li>3D Game</li>
          </StyledUl>
        </StyledContainer>
        <StyledContainer>
          <StyledTopic>CONNECT</StyledTopic>
          <StyledUl>
            <li>
              <span style={{ paddingRight: "1rem" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              info@newworldhouse.com
            </li>
            <li>
              <span style={{ paddingRight: "0.5rem" }}>
                <FontAwesomeIcon icon={faDiscord} />
              </span>
              discord.gg/newworldhouse
            </li>
            <li>
              <span style={{ paddingRight: "1rem" }}>
                <FontAwesomeIcon icon={faLine} />
              </span>
              @newworldhouse.line
            </li>
            <li>
              <span style={{ paddingRight: "1.3rem" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
              newworldhouse.ig
            </li>

            <li>
              <span style={{ paddingRight: "1.5rem" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              @newworldhouse.fb
            </li>
          </StyledUl>
        </StyledContainer>
      </StyledLayout>
      <CopyRight />
    </>
  );
}

export default Footer;
