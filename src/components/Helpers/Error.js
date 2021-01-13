import styled from 'styled-components';

const ErrorText = styled.p`
  font-size: 0.875rem;
  color: #ef6351;
  text-align: center;
  padding: 1rem 0.5rem;
`;

const Error = ({ error }) => {
  if (error) return <ErrorText>{error}</ErrorText>;
  else return null;
};

export default Error;
