import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { ComponentArticle, ComponentItem, StyledHeader } from 'styles/core';

export type AccountsInfoProps = {
  account_id: string;
  account_number: string;
  currency: string;
  current: number;
}[];

const AccountsInfoWrapper = styled.section`
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  padding: 0.25rem;

  @media (min-width: ${theme.mobile.medium}) and (max-width: ${theme.mobile.large}) {
    margin: 0;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    gap: 1rem;
  }

  @media (min-width: ${theme.mobile.large}) {
    margin: 0;
    gap: 2rem;
    grid-template-columns: repeat(2, minmax(400px, 1fr));
  }
`;

const StyledArticle = styled(ComponentArticle)`
  border: 1px solid ${theme.colors.mansaPurple};
  border-radius: 5px;

  grid-template-columns: repeat(1, 1.3fr 2fr);
  gap: 1rem;
  padding: 0.75rem 0.25rem;

  @media (min-width: ${theme.mobile.medium}) {
    grid-template-columns: repeat(1, 1.3fr 1fr);
  }
`;

const GridItem = styled(ComponentItem)`
  background: inherit;
  font-size: 1rem;

  @media (min-width: ${theme.mobile.large}) {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const StyledAccountsInfo = ({ accounts }: { accounts: AccountsInfoProps }) => (
  <>
    <StyledHeader>Accounts</StyledHeader>
    <AccountsInfoWrapper>
      {accounts &&
        accounts.map((account) => (
          <StyledArticle
            color={theme.colors.mansaPurple}
            background={theme.colors.backgroundLightColor}
            key={account.account_id}>
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
