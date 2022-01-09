import styled from "@emotion/styled";
import { ReactNode } from "react";
import { colors } from "styles";

type NavbarProps = {
    title: ReactNode;
}

export default function NavigationBar({ title }: NavbarProps) {
    return (
      <FixedContainer>
        <NavbarContainer>
          <Navbar>
              <NavigationBarTitle>
                  {title}
              </NavigationBarTitle>
          </Navbar>
        </NavbarContainer>
      </FixedContainer>
    );
  }
  
  const FixedContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 44px;
    background: ${colors.white};
    z-index: 9999;
  `;
  
  const NavbarContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 44px;
  `;

  const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

const NavigationBarTitle = styled.div``;