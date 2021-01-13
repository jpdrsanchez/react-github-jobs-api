import styled, { css } from 'styled-components';
import { ReactComponent as Check } from '../../assets/desktop/icon-check.svg';

const Wrapper = styled.label`
  background-color: var(--elementBg);
  padding: 1.75rem 0.625rem 1.75rem 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  font-weight: 700;
  line-height: 1rem;
  color: var(--text-first);

  @media (min-width: 56.25em) {
    padding-left: 2rem;
  }

  ${(props) =>
    props.modal &&
    css`
      padding: 0;
    `}
`;

const Box = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) =>
    props.checked ? 'var(--violet)' : 'var(--checkboxColor)'};
  border-radius: 0.1875rem;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    ${(props) =>
      !props.checked &&
      css`
        background-color: var(--light-violet);
      `}
  }
`;

const Checkbox = ({ options, value, setValue, modal }) => {
  const handleChange = ({ target }) => {
    if (target.checked) setValue([...value, target.value]);
    else setValue(value.filter((option) => option !== target.value));
  };

  return (
    <>
      {options.map((option) => (
        <Wrapper key={option} modal={modal}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            hidden={true}
          />
          <Box checked={value.includes(option)}>
            {value.includes(option) && <Check />}
          </Box>
          {option}
        </Wrapper>
      ))}
    </>
  );
};

export default Checkbox;
