import styled from "styled-components";
import Logo from "./Logo";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const StyledNavBar = styled.div`
  background: var(--color-brand--2);
  position: sticky;
  top: 0;
  padding: 1rem 1rem;

  width: 100vh;
  align-items: center;

  border-bottom: 1px solid var(--color-brand--1);

  z-index: 1000;
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem 6rem;
  }
`;

const StyledUl = styled.ul`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 2rem;
`;

const StyledMenu = styled.li`
  &:hover,
  &:active,
  &.active:visited {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function NavBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickMenu = (menu) => {
    setSearchParams({ scrollTo: menu });
  };

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      const sectionElement = document.getElementById(scrollTo);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams.get("scrollTo")]);

  return (
    <StyledNavBar>
      <Logo />
      <StyledUl>
        <StyledMenu onClick={() => handleClickMenu("home")}>HOME</StyledMenu>
        <StyledMenu onClick={() => handleClickMenu("project")}>
          PROJECT
        </StyledMenu>
        <StyledMenu onClick={() => handleClickMenu("solution")}>
          SOLUTION
        </StyledMenu>
        <StyledMenu onClick={() => handleClickMenu("about")}>ABOUT</StyledMenu>
        <StyledMenu onClick={() => handleClickMenu("contact")}>
          CONTACT
        </StyledMenu>
      </StyledUl>
    </StyledNavBar>
  );
}

export default NavBar;
