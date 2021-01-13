import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useJobs from '../../hooks/useJobs';
import Container from '../Container';
import Button from '../Form/Button';
import JobList from './JobList';
import Loading from '../Helpers/Loading';
import { JOBS_PER_PAGE } from '../../services/api';

const JobSection = styled.section`
  margin-top: 3.5625rem;
  z-index: -1;

  @media (min-width: 43.75em) {
    margin-top: 4.375rem;
  }

  @media (min-width: 62.5em) {
    margin-top: 6.5625rem;
  }
`;

const JobNotFound = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-first);
`;

const AllItemsLoaded = styled.p`
  color: var(--violet);
  font-weight: 700;
  text-align: center;
`;

const ReloadPage = styled.button`
  background-color: var(--violet);
  color: var(--white);
  border-radius: 0.3125rem;
  max-width: 150px;
  padding: 1rem;
  display: block;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 2rem auto;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: var(--light-violet);
  }
`;

const JobWrapper = () => {
  const { jobs, loading, terms } = useJobs();
  const [pages, setPages] = useState([1]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setPages([1]);
    setTotalPages(0);
  }, [terms]);

  useEffect(() => {
    if (!loading) {
      setTotalPages(Math.ceil(jobs.length / JOBS_PER_PAGE));
    }
  }, [loading, jobs]);

  if (loading) return <Loading />;
  if (jobs.length)
    return (
      <JobSection>
        <Container>
          {pages.map((page, index) => {
            const jobItems = jobs.slice(
              index * JOBS_PER_PAGE,
              JOBS_PER_PAGE * (index + 1),
            );
            return <JobList key={page} items={jobItems} />;
          })}
          {pages.length < totalPages ? (
            <Button
              style={{ margin: '0 auto' }}
              onClick={() => setPages([...pages, pages.length + 1])}
            >
              Load More
            </Button>
          ) : (
            <AllItemsLoaded>All items have been loaded</AllItemsLoaded>
          )}
        </Container>
      </JobSection>
    );
  else
    return (
      <JobSection>
        <Container>
          <JobNotFound>Ops! Nothing found</JobNotFound>
          <ReloadPage onClick={() => document.location.reload()}>
            Reload page
          </ReloadPage>
        </Container>
      </JobSection>
    );
};

export default JobWrapper;
