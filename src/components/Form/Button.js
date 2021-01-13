import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  background-color: var(--violet);
  border: none;
  border-radius: 0.3125rem;
  color: var(--white);
  cursor: pointer;
  font-weight: 700;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props.isForm ? '0' : '1rem 2rem')};
  transition: all 0.3s;
  outline: none;

  @media (min-width: 43.75em) {
    padding: ${(props) => (props.isForm ? '1rem 0.875rem' : '1rem 2rem')};
  }

  @media (min-width: 56.25em) {
    padding: 1.0625rem 2.1875rem;
  }

  ${(props) =>
    props.modal &&
    css`
      display: block;
      margin: 0;
      padding: 1rem 0.875rem;
      width: 100%;
    `};

  &:hover {
    background-color: var(--light-violet);
  }
`;

const Button = ({ onClick, children, modal, isForm, ...props }) => {
  return (
    <Wrapper onClick={onClick} modal={modal} isForm={isForm} {...props}>
      {children}
    </Wrapper>
  );
};

export default Button;
