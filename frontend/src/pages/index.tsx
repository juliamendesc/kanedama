import type { NextPage } from 'next';
import Head from 'next/head';
import GlobalStyle from 'styles/global';
import { StyledHeader } from 'components/Header';
import ProfileCardHeader from 'components/ProfileCardHeader';
import { StyledCompanyInfo } from 'components/CompanyInfo';
import { AccountsInfoProps, StyledAccountsInfo } from 'components/AccountsInfo';
import Spinner from 'components/Spinner';
import useFetcher from 'hooks/useFetcher';
import BASE_URL from 'libs/constants';
import { useRouter } from 'next/router';
import { Wrapper } from 'styles/core';

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
  const router = useRouter();
  const { data: user } = useFetcher(BASE_URL.user) as { data: User };
  const { data: company } = useFetcher(BASE_URL.record) as { data: Company };
  const { data: accounts } = useFetcher(BASE_URL.accounts) as { data: AccountsInfoProps};
  if (!company || !accounts || !user) return <Spinner />;

  const { first, last } = user?.results[0].name;
  const { denomination, etablissement_siege } = company.unite_legale;

  const handleUserProfileClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    router.push('/user');
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Kanedama</title>
        <meta name="description" content="Frontend Engineer Test by Julia Mendes" />
      </Head>
      <StyledHeader />
      <Wrapper>
        <a href="/user" onClick={handleUserProfileClick} data-testid="userProfilePage">
        <ProfileCardHeader name={first} lastname={last} />
        </a>
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
