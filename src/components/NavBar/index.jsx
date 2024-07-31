import React from "react"
import styled from "styled-components"
import NavHeader from "./NavHeader"
import NavLinks from "./NavLinks"
import NavTags from "./NavTags"

const NavWrapper = styled.nav`
  position: ${props => (props.$isMobile ? "fixed" : "static")};
  width: 15.5rem;
  height: ${props => (props.$isFixed || props.$isMobile ? "100vh" : "auto")};
  max-height: ${props =>
    !props.$isFixed && !props.$isMobile ? "calc(100vh - 7.375rem)" : "none"};
  background-color: ${props =>
    props.$isFixed && !props.$isMobile
      ? props.theme.navFixedBackground
      : props.theme.navBackground};
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  box-shadow: ${props =>
    props.$isFixed || props.$isMobile
      ? props.theme.navFixedBoxShadow
      : props.theme.navBoxShadow};
  border-radius: ${props =>
    props.$isFixed || props.$isMobile ? "none" : "0 0.5rem 0.5rem 0"};
  visibility: ${props =>
    props.$isVisible || props.$isFixed ? "visible" : "hidden"};
  transform: ${props =>
    props.$isFixed
      ? "none"
      : props.$isVisible
      ? `translateX(0rem) ${
          props.$isMobile ? "translateY(0)" : "translateY(3.6875rem)"
        }`
      : `translateX(-14.25rem) ${
          props.$isMobile ? "translateY(0)" : "translateY(3.6875rem)"
        }`};
  opacity: ${props => (props.$isVisible || props.$isFixed ? 1 : 0)};
  transition: transform 200ms ease, opacity 200ms ease, visibility 200ms ease,
    background-color 200ms ease, width 200ms ease, height 200ms ease;
  z-index: 300;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    .closeButton {
      opacity: 1;
    }
  }
`

const NavBar = ({ $isVisible, $isFixed, $isMobile, setIsNavFixed }) => (
  <NavWrapper $isVisible={$isVisible} $isFixed={$isFixed} $isMobile={$isMobile}>
    <NavHeader
      $isFixed={$isFixed}
      $isMobile={$isMobile}
      changeNavStatic={() => setIsNavFixed(false)}
    />
    <NavLinks />
    <NavTags />
  </NavWrapper>
)

export default NavBar
