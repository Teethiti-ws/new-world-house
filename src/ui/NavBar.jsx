import styled from "styled-components";
import Logo from "./Logo";

const StyledNavBar = styled.div`
  background: var(--color-brand--2);
  position: sticky;
  top: 0;
  padding: 6rem 9.9rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  z-index: 1;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.9rem;
  font-size: 2rem;
`;

const StyledMenu = styled.li`
  // MARK hover && scroll page
  // :visited {
  //   text-decoration: underline;
  // }

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
