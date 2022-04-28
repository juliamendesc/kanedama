import styled from 'styled-components';
import { ComponentArticle, ComponentItem, StyledHeader } from 'styles/core';
import { theme } from 'styles/theme';

type CompanyInfoProps = {
  denomination: string;
  address: string;
  siret: string;
}

const CompanyInfoWrapper = styled.section`
  justify-content: center;
  padding: 0.5rem;

  @media (min-width: ${({ theme }) => theme.mobile.small}) and (max-width: ${({ theme }) => theme.mobile.medium}) {
    margin: 0 auto;
    width: 75%;
  }

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    justify-content: flex-start;
  }
`;

export const StyledArticle = styled(ComponentArticle)`
  grid-template-columns: repeat(1, 0.4fr 1fr);
  padding: 0.25rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    grid-template-columns: repeat(1, 0.1fr 1fr);
  }
`;

const GridItem = styled(ComponentItem)`
  font-size: 1.2rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 1.4rem;
    text-align: start;
    margin: 0;
  }
`;

export const StyledCompanyInfo = ({denomination, address, siret}:CompanyInfoProps) => {
  return (
    <>
      <StyledHeader>Company</StyledHeader>
      <CompanyInfoWrapper>
        <StyledArticle fontWeight={theme.typography.fontWeightRegular} color={theme.colors.darkBlue}>
          <GridItem>Name:</GridItem>
          <GridItem textAlign="end" data-testid="denomination">{denomination}</GridItem>
          <GridItem>SIRET:</GridItem>
          <GridItem textAlign="end">{siret}</GridItem>
          <GridItem>Address:</GridItem>
          <GridItem textAlign="end">{address}</GridItem>
        </StyledArticle>
      </CompanyInfoWrapper>
    </>
  );
};
