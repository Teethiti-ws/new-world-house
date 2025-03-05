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
  width: 100vh;
  display: flex;
  flex-direction: row; /*column */
  flex-wrap: wrap;
  justify-content: center;
  gap: 15rem;
  background: var(--color-brand--footer);
  padding: 2.5rem 8.5rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const StyledContainer = styled.div`
  display: block;
  padding-top: 5rem;
`;

const ImgFooter = styled.img`
  margin: auto 0;
  width: 26.8rem;
  padding-top: 5rem;
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

// const StyledLayout = styled.div`
//   display: flex;
//   flex-direction: row; /*column */
//   flex-wrap: wrap;

//   align-items: center;
//   justify-content: center;
//   background: var(--color-brand--footer);
//   padding: 2.5rem 1.5rem;
// `;

// const StyledContainer = styled.div`
//   display: block;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const ImgFooter = styled.img`
//   margin: auto;
//   height: auto;
//   width: 100%;
//   max-width: 200px; /* Set a maximum width for the logo */
// `;

// const StyledTopic = styled.p`
//   font-size: 2rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
// `;

// const StyledUl = styled.ul`
//   list-style-type: none;
//   font-size: 1.6rem;
//   padding: 0;
// `;

// const StyledUlFooter = styled.ul`
//   list-style-type: disc;
//   font-size: 1.3rem;
//   padding-left: 2rem;
// `;

function Footer() {
  return (
    <>
      <StyledLayout>
        <section id="about">
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
        </section>

        <section id="contact">
          <StyledContainer>
            <StyledTopic>CONTACT</StyledTopic>
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
        </section>
      </StyledLayout>
      <CopyRight />
    </>
  );
}

export default Footer;
