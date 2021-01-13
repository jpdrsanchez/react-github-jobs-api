import { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';

const useJobs = () => {
  const {
    jobs,
    setJobs,
    loading,
    setLoading,
    terms,
    setTerms,
    page,
    setPage,
  } = useContext(JobContext);

  return {
    jobs,
    setJobs,
    loading,
    setLoading,
    terms,
    setTerms,
    page,
    setPage,
  };
};

export default useJobs;
