import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 71.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;

  @media (min-width: 43.75em) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 62.5em) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Container = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Container;
