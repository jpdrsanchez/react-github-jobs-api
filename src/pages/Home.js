import styled from 'styled-components';
import FilterWrapper from '../components/Filter/FilterWrapper';
import Head from '../components/Head';
import JobWrapper from '../components/Jobs/JobWrapper';

const Main = styled.main`
  position: relative;
  top: -2.5rem;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8.5rem);
  z-index: 1;

  @media (min-width: 43.75em) {
    min-height: calc(100vh - 10rem);
  }

  @media (min-width: 62.5em) {
    min-height: calc(100vh - 10.125rem);
  }

  & > div {
    width: 100%;
  }

  & > div {
    &:nth-child(2) {
      flex: 1;
      width: 100%;
    }
  }

  & > section {
    flex: 1;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <Main>
      <Head title="Home" />
      <FilterWrapper />
      <JobWrapper />
    </Main>
  );
};

export default Home;
