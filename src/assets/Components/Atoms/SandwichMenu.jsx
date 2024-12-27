import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu

const SandwichMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Label>
      <HiddenCheckbox
        type="checkbox"
        checked={openMenu}
        onChange={() => setOpenMenu(!openMenu)}
      />
      <IconWrapper isOpen={openMenu}>
        {openMenu ? <FaTimes /> : <FaBars />}
      </IconWrapper>
    </Label>
  );
};

const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  /* @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  } */
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.mainColor};
  transition: transform 0.5s ease, color 0.3s ease;

  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};

`;

export default SandwichMenu;
