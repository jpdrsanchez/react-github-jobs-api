import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { GET_JOBS } from '../services/api';

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(1);
  const [terms, setTerms] = useState({
    search: '',
    location: '',
    fulltime: '',
  });
  const { request } = useFetch();

  useEffect(() => {
    setLoading(true);
    const getJobs = async () => {
      const { json } = await request(
        GET_JOBS(page, terms.search, terms.location, terms.fulltime),
      );
      setJobs((jobs) => [...jobs, ...json]);
      if (json.length >= 50) setPage(page + 1);
      else setLoading(false);
    };
    getJobs();
  }, [request, page, terms]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        setJobs,
        loading,
        setLoading,
        terms,
        setTerms,
        page,
        setPage,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobProvider;
