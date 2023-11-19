import styled from "styled-components";
import Logo from "./Logo";

const StyledNavBar = styled.div`
  background: var(--color-brand--2);
  position: sticky;
  top: 0;
  padding: 1rem 1rem;

  width: 100vh;
  align-items: center;

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
  return (
    <StyledNavBar>
      <Logo />
      <StyledUl>
        <StyledMenu>HOME</StyledMenu>
        <StyledMenu>PROJECT</StyledMenu>
        <StyledMenu>SOLUTION</StyledMenu>
        <StyledMenu>ABOUT</StyledMenu>
        <StyledMenu>CONTACT</StyledMenu>
      </StyledUl>
    </StyledNavBar>
  );
}

export default NavBar;
