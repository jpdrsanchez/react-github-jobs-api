import styled from 'styled-components';
import { ReactComponent as Sun } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as Moon } from '../assets/desktop/icon-moon.svg';
import useTheme from '../hooks/useTheme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg {
    &:first-of-type {
      margin-right: 1rem;
    }

    &:last-of-type {
      margin-left: 1rem;
    }
  }
`;

const Body = styled.div`
  height: 1.5rem;
  width: 3rem;
  background-color: var(--white);
  border-radius: 0.75rem;
  cursor: pointer;
  padding: 0.3125rem;
  position: relative;

  &:hover {
    & > div {
      background-color: var(--light-violet);
    }
  }
`;

const Dot = styled.div`
  background-color: var(--violet);
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  transition: right 0.3s;
  transform: ${(props) => (props.dark ? 'translateX(24px)' : 'initial')};
  transition: all 0.3s;
`;

const Switch = () => {
  const { dark, setDark } = useTheme();

  return (
    <Wrapper>
      <Sun onClick={() => setDark(false)} />
      <Body onClick={() => setDark(!dark)}>
        <Dot dark={dark} />
      </Body>
      <Moon onClick={() => setDark(true)} />
    </Wrapper>
  );
};

export default Switch;
