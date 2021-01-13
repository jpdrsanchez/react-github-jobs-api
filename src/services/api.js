const CORS_URL = (url) =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

const API_URL = 'https://jobs.github.com/positions';

export const GET_JOBS = (
  page = '',
  search = '',
  location = '',
  fulltime = '',
) => {
  return CORS_URL(
    `${API_URL}.json?page=${page}&search=${search}&location=${location}&full_time=${fulltime}`,
  );
};

export const GET_JOB = (id) => {
  return CORS_URL(`${API_URL}/${id}.json?`);
};

export const JOBS_PER_PAGE = 12;
