import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
import styled from 'styled-components';
import { StyledHeader } from 'components/Navbar';
import { StyledCompanyInfo } from 'components/CompanyInfo';
import { AccountsInfoProps, StyledAccountsInfo } from 'components/AccountsInfo';
import { ProfileCardHeader } from 'components/ProfileCardHeader';
import Spinner from 'components/Spinner';
import useFetcher from 'hooks/useFetcher';
import BASE_URL from 'libs/constants';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) and (max-width: ${({ theme }) =>
      theme.mobile.large}) {
    margin: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.large}) {
    margin: 0 5rem;
  }
`;

export type Company = {
  unite_legale: {
    id: number;
    denomination: string;
    etablissement_siege: {
      geo_adresse: string;
      siret: string;
    };
  };
};

export type User = {
  results: {
    id: number;
    name: {
      first: string;
      last: string;
    };
  }[];
};

const Home: NextPage = () => {
  const { data: user } = useFetcher(BASE_URL.user) as { data: User };
  const { data: company } = useFetcher(BASE_URL.record) as { data: Company };
  const { data: accounts } = useFetcher(BASE_URL.accounts) as { data: AccountsInfoProps};
  if (!company || !accounts || !user) return <Spinner />;

  const { first, last } = user?.results[0].name;
  const { denomination, etablissement_siege } = company.unite_legale;

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
        <StyledCompanyInfo
          denomination={denomination}
          address={etablissement_siege.geo_adresse}
          siret={etablissement_siege.siret}
        />
        <StyledAccountsInfo accounts={accounts} />
      </Wrapper>
    </>
  );
};

export default Home;
