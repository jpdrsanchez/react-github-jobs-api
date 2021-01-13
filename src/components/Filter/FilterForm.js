import styled, { keyframes } from 'styled-components';
import { ReactComponent as Search } from '../../assets/desktop/icon-search.svg';
import { ReactComponent as SearchMobile } from '../../assets/mobile/icon-search.svg';
import { ReactComponent as Location } from '../../assets/desktop/icon-location.svg';
import { ReactComponent as FilterIcon } from '../../assets/mobile/icon-filter.svg';
import Input from '../Form/Input';
import Checkbox from '../Form/Checkbox';
import Button from '../Form/Button';
import useMedia from '../../hooks/useMedia';
import FilterModal from './FilterModal';
import { useState } from 'react';
import useForm from '../../hooks/useForm';
import useJobs from '../../hooks/useJobs';

const show = keyframes`
  to {
    opacity: 1;
  }
`;

const Form = styled.form`
  background-color: var(--elementBg);
  border-radius: 0.375rem;
  display: flex;
  overflow: hidden;
  opacity: 0;
  animation: ${show} 0.3s forwards;

  & > label {
    &:nth-of-type(1) {
      flex: 0 1 463px;
      max-width: 463px;

      @media (max-width: 43.6875em) {
        flex: 1;
        max-width: 100%;
      }
    }

    &:nth-of-type(2) {
      flex: 0 1 300px;
      max-width: 300px;
    }

    &:nth-of-type(3) {
      flex: 0 1 191px;
      max-width: 191px;
    }
  }

  & > button {
    flex: 1;

    &:first-of-type {
      @media (max-width: 43.6875em) {
        flex: 0 0 20px;
      }
    }

    &:last-of-type {
      @media (max-width: 43.6875em) {
        flex: 0 0 48px;
      }
    }
  }
`;

const Filter = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

const FilterForm = () => {
  const [modal, setModal] = useState(false);
  const { mobile, tablet } = useMedia();
  const search = useForm(false);
  const location = useForm(false);
  const [check, setCheck] = useState([]);
  const { terms, setTerms, setPage, setJobs } = useJobs();

  const handleModal = (event) => {
    event.preventDefault();
    setModal(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTerms({
      ...terms,
      search: search.value,
      location: location.value,
      fulltime: check.length ? 'on' : '',
    });
    setJobs([]);
    setPage(1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        Icon={Search}
        id="search"
        name="search"
        placeholder={
          mobile || tablet
            ? 'Filter by title…'
            : 'Filter by title, companies, expertise…'
        }
        type="text"
        autoComplete="off"
        {...search}
      />
      {!mobile && (
        <Input
          Icon={Location}
          id="location"
          name="location"
          placeholder="Filter by location…"
          type="text"
          autoComplete="off"
          border={true}
          location={true}
          {...location}
        />
      )}
      {!mobile && (
        <Checkbox
          options={[`${mobile || tablet ? 'Full Time' : 'Full Time Only'}`]}
          value={check}
          setValue={setCheck}
        />
      )}
      {mobile && (
        <Filter onClick={handleModal}>
          <FilterIcon />
        </Filter>
      )}
      <Button isForm={true}>{mobile ? <SearchMobile /> : 'Search'}</Button>
      {mobile && modal && (
        <FilterModal setModal={setModal}>
          <Input
            Icon={Location}
            id="location"
            name="location"
            placeholder="Filter by location…"
            type="text"
            autoComplete="off"
            modal={true}
            {...location}
          />
          <Checkbox
            options={[`${mobile || tablet ? 'Full Time' : 'Full Time Only'}`]}
            value={check}
            setValue={setCheck}
            modal={true}
          />
          <Button
            type="submit"
            modal={true}
            onClick={(e) => {
              setModal(false);
              handleSubmit(e);
            }}
          >
            Search
          </Button>
        </FilterModal>
      )}
    </Form>
  );
};

export default FilterForm;
