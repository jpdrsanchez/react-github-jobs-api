import { memo } from 'react';
import styled from 'styled-components';
import desktopBg from '../assets/desktop/bg-pattern-header.svg';
import tabletBg from '../assets/tablet/bg-pattern-header.svg';
import mobileBg from '../assets/mobile/bg-pattern-header.svg';
import { ReactComponent as Logo } from '../assets/desktop/logo.svg';
import Container from './Container';
import Switch from './Switch';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  background: url(${mobileBg}) no-repeat center center;
  background-size: cover;
  height: 8.5rem;
  padding-top: 2rem;

  @media (min-width: 43.75em) {
    background-image: url(${tabletBg});
    background-position: 0 100%;
    height: 10rem;
    padding-top: 2.625rem;
  }

  @media (min-width: 62.5em) {
    background-image: url(${desktopBg});
    height: 10.125rem;
    padding-top: 2.8125rem;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <Switch />
      </HeaderContainer>
    </Wrapper>
  );
};

export default memo(Header);
