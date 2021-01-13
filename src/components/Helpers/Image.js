import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

const Skeleton = styled.div`
  height: 100%;
  background-image: linear-gradient(
    90deg,
    var(--text-second) 0px,
    var(--skeleton) 50%,
    var(--text-second) 100%
  );
  background-color: #eee;
  background-size: 200%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
  grid-area: 1 / 1;
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
  grid-area: 1 / 1;
  opacity: ${(props) => (props.isOpacity ? '0' : '1')};
  transition: opacity 0.3s;
`;

const Image = ({ className, src, alt }) => {
  const [skeleton, setSkeleton] = useState(true);
  return (
    <Wrapper className={className}>
      {skeleton && <Skeleton />}
      <Img
        onLoad={() => setSkeleton(false)}
        src={src}
        alt={alt}
        isOpacity={skeleton}
      />
    </Wrapper>
  );
};

export default Image;
