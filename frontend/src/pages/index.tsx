import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
import styled from 'styled-components';
import { StyledHeader } from 'components/Navbar';
import { StyledCompanyInfo } from 'components/CompanyInfo';
import { StyledAccountsInfo } from 'components/AccountsInfo';
import { ProfileCard } from 'components/ProfileCard';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) and (max-width: 999px) {
    margin: 15px;
  }

  @media (min-width: 1000px) {
    margin: 0 100px;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Kanedama</title>
        <meta name="description" content="Frontend Engineer Test by Julia Mendes" />
      </Head>
      <StyledHeader />
      <Wrapper>
        <ProfileCard name="Julia" lastname="Mendes" />
        <StyledCompanyInfo />
        <StyledAccountsInfo />
      </Wrapper>
    </>
  );
};

export default Home;
