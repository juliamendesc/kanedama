import styled from 'styled-components';
import { theme } from 'styles/theme';

const StyledHeader = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.4rem;
  margin: 3rem auto 1rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 1.6rem;
    margin: 2rem 0 2rem;
  }
`;

const AccountsInfoWrapper = styled.section`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 0.25rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) and (max-width: ${({ theme }) =>
      theme.mobile.large}) {
    margin: 0;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.large}) {
    margin: 0;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
  }
`;

const StyledArticle = styled.article<{ color?: string }>`
  background: ${({ theme }) => theme.colors.backgroundLightColor};
  border: 1px solid ${({ theme }) => theme.colors.mansaPurple};
  border-radius: 5px;

  color: ${({ color }) => color};
  padding: 0.75rem 0.25rem;

  display: grid;
  grid-template-columns: repeat(1, 1.3fr 2fr);
  grid-template-rows: auto;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    grid-template-columns: repeat(1, 1.3fr 1fr);
  }
`;

const GridItem = styled.p<{ textAlign?: string; fontWeight?: string }>`
  text-align: ${({ textAlign }) => textAlign || 'start'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  background: inherit;
  padding: 0.25rem;
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.mobile.large}) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export type AccountsInfoProps = {
    account_id: string;
    account_number: string;
    currency: string;
    current: number;
}[];

export const StyledAccountsInfo = ({accounts}: {
  accounts: AccountsInfoProps;
}) => {
  return (
    <>
      <StyledHeader>Accounts</StyledHeader>
      <AccountsInfoWrapper>
        {accounts &&
          accounts.map((account) => (
            <StyledArticle color={theme.colors.mansaPurple} key={account.account_id}>
              <GridItem fontWeight="bold">Account Number:</GridItem>
              <GridItem fontWeight="bold" textAlign="end">
                {account.account_number}
              </GridItem>
              <GridItem>Balance:</GridItem>
              <GridItem textAlign="end">
                {account.current} {account.currency}
              </GridItem>
            </StyledArticle>
          ))}
      </AccountsInfoWrapper>
    </>
  );
};
