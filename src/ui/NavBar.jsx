import styled from "styled-components";
import Logo from "./Logo";

const StyledNavBar = styled.div`
  background: var(--color-brand--2);
  position: sticky;
  top: 0;
  padding: 1rem 1rem;

  width: 100vh;
  align-items: center;

  border-bottom: 1px solid var(--color-brand--1);

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
  const handleClickMenu = (menu) => {
    const url = new URL(window.location);
    url.searchParams.set("scrollTo", menu);
    window.history.pushState({}, "", `?scrollTo=${menu}`);

    const sectionElement = document.getElementById(menu);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
