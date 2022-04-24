import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
import styled from 'styled-components';
import { StyledNavbar } from 'components/Navbar';
import { StyledCompanyInfo } from 'components/CompanyInfo';
import { StyledAccountsInfo } from 'components/AccountsInfo';
import { ProfileCard } from '@/components/ProfileCard';

const Wrapper = styled.main`
  height: 100vh;
  margin: 10px 100px;
`;

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Kanedama</title>
        <meta name="description" content="Frontend Engineer Test by Julia Mendes" />
      </Head>
      <StyledNavbar />
      <Wrapper>
        <ProfileCard name="Julia" lastname='Mendes' />
        <StyledCompanyInfo />
        <StyledAccountsInfo />
      </Wrapper>
    </>
  );
};

export default Home;
