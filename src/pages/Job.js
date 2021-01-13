import styled from 'styled-components';
import JobDetail from '../components/Jobs/JobDetail';

const Main = styled.main`
  position: relative;
  top: -0.9375rem;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8.5rem);
  z-index: 1;

  @media (min-width: 43.75em) {
    top: -2.5rem;
    min-height: calc(100vh - 10rem);
  }

  @media (min-width: 62.5em) {
    min-height: calc(100vh - 10.125rem);
  }

  & > div {
    flex: 1;
    width: 100%;
  }

  & > section {
    flex: 1;
    width: 100%;
  }
`;

const Job = () => {
  return (
    <Main>
      <JobDetail />
    </Main>
  );
};

export default Job;
