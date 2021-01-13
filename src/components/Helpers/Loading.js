import { useEffect, useState } from 'react';
import {
  GoGlobe,
  GoBriefcase,
  GoCommentDiscussion,
  GoOrganization,
} from 'react-icons/go';
import styled, { css, keyframes } from 'styled-components';
import useTheme from '../../hooks/useTheme';

const showIcon = keyframes`
  to {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  ${(props) =>
    props.darkMode &&
    css`
      color: #fff;
    `}

  svg {
    width: 2rem;
    height: 2rem;
    transform: scale(0);
    animation: ${showIcon} 0.3s forwards;
  }
`;

const Loading = ({ className }) => {
  const [visible, setVisible] = useState(0);
  const { dark } = useTheme();

  const showIcon = (icon) => ({ display: visible === icon ? 'block' : 'none' });

  useEffect(() => {
    const updateIcon = () =>
      setVisible((visible) => (visible < 3 ? visible + 1 : 0));
    const interval = setInterval(() => {
      updateIcon();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wrapper className={className} darkMode={dark}>
      <GoGlobe style={showIcon(0)} />
      <GoBriefcase style={showIcon(1)} />
      <GoCommentDiscussion style={showIcon(2)} />
      <GoOrganization style={showIcon(3)} />
    </Wrapper>
  );
};

export default Loading;
