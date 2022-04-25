import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
import styled from 'styled-components';
import { StyledHeader } from 'components/Navbar';
import { StyledCompanyInfo } from 'components/CompanyInfo';
import { StyledAccountsInfo } from 'components/AccountsInfo';
import { ProfileCardHeader } from 'components/ProfileCardHeader';
import { useFetcher } from 'hooks/useFetcher';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) and (max-width: ${({ theme }) => theme.mobile.large}){
    margin: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.large}) {
    margin: 0 5rem;
  }
`;

const Home: NextPage = () => {
  const {data:user} = useFetcher('https://randomuser.me/api/');
  if (!user) return null;
  const {first, last} = user.results[0].name;
  console.log(user);
  // const {} = useFetcher


  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Kanedama</title>
        <meta name="description" content="Frontend Engineer Test by Julia Mendes" />
      </Head>
      <StyledHeader />
      <Wrapper>
        <ProfileCardHeader name={first} lastname={last} />
        <StyledCompanyInfo />
        <StyledAccountsInfo />
      </Wrapper>
    </>
  );
};

export default Home;
