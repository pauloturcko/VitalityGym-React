import React from "react";
import styled from "styled-components";
import SandwichMenu from "../Atoms/SandwichMenu";
import logo from "../../Img/pink_logo.svg";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 175px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 1.5rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledDiv>
        <img src={logo} alt="Website Logo" />
        <SandwichMenu />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
