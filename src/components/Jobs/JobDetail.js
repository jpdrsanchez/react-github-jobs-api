import { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { GET_JOB } from '../../services/api';
import Loading from '../Helpers/Loading';
import styled from 'styled-components';
import Container from '../Container';
import Image from '../Helpers/Image';
import {
  heading1,
  heading2,
  heading3,
  heading4,
  text,
} from '../../styles/typography';
import { formatDate } from '../../utils/date';
import jobBgFooter from '../../assets/desktop/bg-pattern-detail-footer.svg';
import jobBgFooterMobile from '../../assets/mobile/bg-pattern-detail-footer.svg';
import useMedia from '../../hooks/useMedia';
import Head from '../Head';

const JobContainer = styled(Container)`
  display: grid;
  gap: 1.5rem;
  max-width: 50.625rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  & > div {
    &:last-of-type {
      @media (max-width: 43.6875em) {
        margin-top: 0.5rem;
      }
    }
  }

  @media (min-width: 43.75em) {
    gap: 2rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-bottom: 0.25rem;
  }

  @media (min-width: 62.5em) {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 2rem;
  }
`;

const FooterContainer = styled(JobContainer)`
  display: block;
  margin-bottom: 0;

  a {
    @media (min-width: 43.75em) {
      grid-column: 2;
      grid-row: 1 / 3;
    }
  }

  @media (min-width: 43.75em) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    row-gap: 0.75rem;
  }
`;

const Footer = styled.footer`
  background-color: var(--elementBg);
  position: relative;
  bottom: -2.5rem;
  padding-top: 1.4735rem;
  padding-bottom: 1.5625rem;

  h3 {
    ${heading3};
    color: var(--text-first);
  }

  p {
    ${text};
    color: var(--text-second);
    line-height: 1;
  }
`;

const ApplyNow = styled.a`
  color: var(--white);
  background-color: var(--violet);
  display: block;
  min-width: 141px;
  padding: 1rem 1.25rem;
  grid-column: 2;
  grid-row: 1 / 3;
  border-radius: 0.3125rem;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s;
  text-align: center;

  &:hover {
    background-color: var(--light-violet);
  }
`;

const CompanyInfo = styled.div`
  background-color: var(--elementBg);
  border-radius: 0.375rem;
  position: relative;

  @media (min-width: 43.75em) {
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  & > div {
    &:first-of-type {
      width: 3.125rem;
      height: 3.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      overflow: hidden;

      @media (max-width: 43.6875em) {
        position: absolute;
        top: calc(-3.125rem / 2);
        left: calc(50% - (3.125rem / 2));
        border-radius: 0.9375rem;
      }

      @media (min-width: 43.75em) {
        width: 8.75rem;
        height: 8.75rem;
        flex-shrink: 0;
        padding: 1rem;
      }
    }

    &:last-of-type {
      flex: 1;
      padding-left: 2.5rem;
      padding-right: 2.6875rem;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;

      @media (max-width: 43.6875em) {
        flex-direction: column;
        grid-template-columns: auto;
        padding: 3.0625rem 1rem 2rem 1rem;
      }

      h2 {
        ${heading2};
        line-height: 1;
        color: var(--text-first);
        margin-bottom: 0.8125rem;

        @media (max-width: 43.6875em) {
          text-align: center;
        }
      }

      p {
        color: var(--text-second);
        @media (max-width: 43.6875em) {
          margin-bottom: 1.6875rem;
          text-align: center;
        }
      }

      a {
        color: var(--secondButtonColor);
        background-color: var(--secondButton);
        display: block;
        max-width: 147px;
        margin: 0 auto;
        padding: 1rem 1.25rem;
        border-radius: 0.3125rem;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s;
        text-align: center;

        @media (min-width: 43.75em) {
          grid-column: 2;
          grid-row: 1 / 3;
          min-width: 147px;
        }

        &:hover {
          background-color: var(--secondButtonHover);
        }
      }
    }
  }
`;

const JobInfo = styled.div`
  padding: 2.5rem 1.5rem 2rem 1.5rem;
  background-color: var(--elementBg);
  border-radius: 0.375rem;
  overflow: hidden;

  @media (min-width: 43.75em) {
    padding: 3rem 2.6875rem 3rem;
  }

  & > div {
    &:first-of-type {
      margin-bottom: 2rem;

      @media (min-width: 43.75em) {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr auto;
        row-gap: 0.75rem;
        margin-bottom: 2.75rem;
      }

      a {
        grid-column: 2;
        grid-row: 1 / 3;
        @media (max-width: 43.6875em) {
          margin-top: 2rem;
        }
      }
    }
  }

  & > ul {
    display: flex;
    color: var(--text-second);
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
  }

  h1 {
    ${heading1};
    color: var(--text-first);
    margin-top: 0.6875rem;
    @media (max-width: 43.6875em) {
      margin-bottom: 0.75rem;
    }
  }

  h4 {
    ${heading4};
    color: var(--violet);
  }
`;

const JobDescription = styled.div`
  p {
    ${text};
    color: var(--text-second);
    margin-bottom: 1.75rem;

    & > strong {
      font-weight: 700;

      &:only-child {
        ${heading3};
        color: var(--text-first);
        margin-top: 3rem;
        display: block;
        margin-bottom: 1.75rem;
      }
    }
  }

  ul {
    ${text};
    color: var(--text-second);
    margin-bottom: 1.75rem;
  }

  li {
    display: flex;
    align-items: center;
    &::before {
      width: 0.25rem;
      height: 0.25rem;
      content: '';
      display: block;
      background-color: var(--violet);
      border-radius: 50%;
      flex: 0 0 0.25rem;
      margin-right: 2rem;
      margin-bottom: 0.25rem;
    }
  }

  a {
    font-weight: 700;
    color: var(--violet);
  }
`;

const JobFooter = styled.div`
  padding: 2rem;
  background: url(${jobBgFooterMobile}) no-repeat center center;
  background-size: cover;
  border-radius: 0.375rem;
  overflow: hidden;

  @media (min-width: 43.75em) {
    background-image: url(${jobBgFooter});
    padding: 2.5rem 2.6875rem 2.5rem 3rem;
  }

  & > h3 {
    ${heading3};
    display: block;
    margin-bottom: 1.75rem;
  }

  & > * {
    ${text};
    color: var(--white);
  }

  p {
    ${text};
    word-break: break-all;
    &:not(:last-child) {
      margin-bottom: 1.75rem;
    }
  }

  a {
    ${text};
    font-weight: 700;
    color: var(--white);
  }
`;

const JobDetail = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();
  const { mobile } = useMedia();
  const descriptionRef = useRef(null);

  useEffect(() => {
    const url = GET_JOB(id);
    request(url);
  }, [id, request]);

  useEffect(() => {
    if (descriptionRef.current) {
      const li = descriptionRef.current.querySelectorAll('li');
      if (li.length) {
        li.forEach((item) => {
          const inenrLi = item.innerHTML;
          item.innerHTML = `<span>${inenrLi}</span>`;
        });
      }
    }
  }, [descriptionRef, loading]);

  if (loading) return <Loading />;
  if (error) return <Navigate to="/" />;
  if (data)
    return (
      <>
        <Head
          title={data.company}
          description={`${data.company} company job details page`}
        />
        <section>
          <JobContainer>
            <CompanyInfo>
              <div>
                <Image src={data.company_logo} alt={data.company} />
              </div>
              <div>
                <h2>{data.company}</h2>
                <p>{data.company_url?.replace(/https?:\/\/www\./g, '')}</p>
                <a href={data.company_url} target="_blank" rel="noreferrer">
                  Company Site
                </a>
              </div>
            </CompanyInfo>
            <JobInfo>
              <ul>
                <li>{formatDate(data.created_at)}</li>
                <li>{data.type}</li>
              </ul>
              <div>
                <h1>{data.title}</h1>
                <h4>{data.location}</h4>
                <ApplyNow
                  href={`https://jobs.github.com/positions/${data.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply Now
                </ApplyNow>
              </div>
              <JobDescription
                ref={descriptionRef}
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </JobInfo>
            <JobFooter>
              <h3>How to Apply</h3>
              <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />
            </JobFooter>
          </JobContainer>
        </section>
        <Footer>
          <FooterContainer>
            {!mobile && (
              <>
                <h3>{data.title}</h3>
                <p>{data.company}</p>
              </>
            )}
            <ApplyNow
              href={`https://jobs.github.com/positions/${data.id}`}
              target="_blank"
              rel="noreferrer"
            >
              Apply Now
            </ApplyNow>
          </FooterContainer>
        </Footer>
      </>
    );
  else return null;
};

export default JobDetail;
