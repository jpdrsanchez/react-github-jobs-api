import styled, { keyframes } from 'styled-components';
import JobItem from './JobItem';

const show = keyframes`
  to {
    opacity: 1;
    transform: none;
  }
`;

const List = styled.ul`
  display: grid;
  row-gap: 3.0625rem;
  opacity: 0;
  transform: translateY(-30px);
  animation: ${show} 0.3s forwards;

  &:not(:last-of-type) {
    margin-bottom: 3.0625rem;

    @media (min-width: 43.75em) {
      margin-bottom: 4.0625rem;
    }
  }

  &:last-of-type {
    margin-bottom: 2rem;

    @media (min-width: 43.75em) {
      margin-bottom: 3.5rem;
    }
  }

  @media (min-width: 43.75em) {
    grid-template-columns: 1fr 1fr;
    gap: 4.0625rem 0.6875rem;
  }

  @media (min-width: 62.5em) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.875rem;
  }
`;

const JobList = ({ items }) => {
  return (
    <List>
      {items.map((item, index) => (
        <JobItem
          key={index}
          id={item.id}
          date={item.created_at}
          type={item.type}
          title={item.title}
          company={item.company}
          location={item.location}
          image={item.company_logo}
        />
      ))}
    </List>
  );
};

export default JobList;
