import styled, { css } from 'styled-components';

const Wrapper = styled.label`
  background-color: var(--elementBg);
  padding: ${(props) =>
    props.location
      ? '1.75rem 0 1.75rem 1.4375rem'
      : '1.75rem 0 1.75rem 1.5rem'};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  position: relative;
  ${(props) =>
    props.border &&
    css`
      border-left: 1px solid var(--borderColor);
      border-right: 1px solid var(--borderColor);
    `}

  @media (min-width: 62.5em) {
    padding: ${(props) =>
      props.location
        ? '1.75rem 0 1.75rem 1.4375rem'
        : '1.75rem 0 1.75rem 2rem'};
  }

  ${(props) =>
    props.modal &&
    css`
      border-bottom: 1px solid var(--borderColor);
      padding: 0 1.5rem 1.5rem;
      margin-left: -1.5rem;
      margin-right: -1.5rem;
    `}

  p {
    position: absolute;
    left: 2rem;
    bottom: 0.25rem;
  }
`;

const StyledInput = styled.input`
  caret-color: var(--violet);
  line-height: 1rem;
  border: none;
  outline: none;
  width: 100%;
  color: var(--text-first);
  background-color: transparent;

  &::placeholder {
    color: var(--placeholderColor);
  }
`;

const Input = ({
  type,
  name,
  id,
  placeholder,
  Icon,
  location = false,
  border = false,
  modal = false,
  ...props
}) => {
  return (
    <>
      <Wrapper border={border} modal={modal} location={location}>
        {Icon && <Icon />}
        <StyledInput
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </Wrapper>
    </>
  );
};

export default Input;
