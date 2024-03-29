import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { ComponentArticle, ComponentItem, StyledHeader } from 'styles/core';

type CompanyInfoProps = {
  denomination: string;
  address: string;
  siret: string;
};

const CompanyInfoWrapper = styled.section`
  justify-content: center;

  @media (min-width: ${theme.mobile.small}) and (max-width: ${theme.mobile.medium}) {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: ${theme.mobile.medium}) {
    justify-content: flex-start;
  }
`;

const StyledArticle = styled(ComponentArticle)`
  grid-template-columns: repeat(1, 0.4fr 1fr);

  @media (min-width: ${theme.mobile.medium}) {
    grid-template-columns: repeat(1, 0.1fr 2fr);
    width: 800px;
  }
`;

const GridItem = styled(ComponentItem)`
  font-size: 1.2rem;

  @media (min-width: ${theme.mobile.medium}) {
    font-size: 1.3rem;
    text-align: start;
    margin: 0;
  }
`;

export const StyledCompanyInfo = ({ denomination, address, siret }: CompanyInfoProps) => (
  <>
    <StyledHeader>Company</StyledHeader>
    <CompanyInfoWrapper>
      <StyledArticle fontWeight={theme.typography.fontWeightRegular} color={theme.colors.darkBlue}>
        <GridItem>Name:</GridItem>
        <GridItem textAlign="end" data-testid="denomination">
          {denomination}
        </GridItem>
        <GridItem>SIRET:</GridItem>
        <GridItem textAlign="end">{siret}</GridItem>
        <GridItem>Address:</GridItem>
        <GridItem textAlign="end">{address}</GridItem>
      </StyledArticle>
    </CompanyInfoWrapper>
  </>
);
