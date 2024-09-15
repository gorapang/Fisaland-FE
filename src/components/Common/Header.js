import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"/>
        </LogoIcon>
        <h2>Fisaland</h2>
      </Logo>
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">Meetings</NavItem>
        <NavItem href="#">Restaurants</NavItem>
        <NavItem href="#">Reviews</NavItem>
      </Nav>
      <ButtonGroup>
        <Button primary>Log in</Button>
        <Button>Sign up</Button>
      </ButtonGroup>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-bottom: 1px solid #EEEFF2;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1C1D22;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
  color: #1C1D22;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  color: #1C1D22;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  border: none;

  background-color: ${({ primary }) => primary ? '#607AFB' : '#EEEFF2'};
  color: ${({ primary }) => primary ? '#F9FAFA' : '#1C1D22'};
`;
