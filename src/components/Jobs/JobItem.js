import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../../utils/date';
import Image from '../Helpers/Image';
import { heading3, heading4 } from '../../styles/typography';
import noImage from '../../assets/no-image.webp';

const Item = styled.li`
  background-color: var(--elementBg);
  border-radius: 0.375rem;
  position: relative;
  z-index: -1;

  a {
    display: block;
    text-decoration: none;
    padding: 3.0625rem 2rem 2rem;
  }

  ul {
    display: flex;
    color: var(--text-second);
  }

  li {
    display: flex;
    align-items: center;

    &:first-child {
      &::after {
        content: '';
        display: block;
        height: 0.25rem;
        width: 0.25rem;
        background-color: var(--text-second);
        margin-left: 0.75rem;
        margin-right: 0.75rem;
        border-radius: 50%;
      }
    }
  }

  h3 {
    ${heading3};
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: var(--text-first);
  }

  h4 {
    ${heading4};
    color: var(--violet);
    margin-top: 2.75rem;
  }

  p {
    color: var(--text-second);
  }
`;

const JobImage = styled(Image)`
  position: absolute;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 0.9375rem;
  top: calc(-3.125rem / 2);
  left: 2rem;
  overflow: hidden;
`;

const JobItem = ({ id, date, type, title, company, location, image }) => {
  return (
    <Item>
      <JobImage src={image ? image : noImage} alt={company} />
      <Link to={`jobs/${id}`}>
        <ul>
          <li>{formatDate(date)}</li>
          <li>{type}</li>
        </ul>
        <h3>{title}</h3>
        <p>{company}</p>
        <h4>{location}</h4>
      </Link>
    </Item>
  );
};

export default JobItem;
