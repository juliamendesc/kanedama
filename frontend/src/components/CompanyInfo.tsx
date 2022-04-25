import styled from 'styled-components';

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

const StyledArticle = styled.article`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  color: ${({ theme }) => theme.colors.darkBlue};

  display: grid;
  grid-template-columns: repeat(1, 0.4fr 1fr);
  grid-template-rows: auto;
  padding: 0.25rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    grid-template-columns: repeat(1, 0.1fr 1fr);
  }
`;

const GridItem = styled.p<{ textAlign?: string }>`
  text-align: ${({ textAlign }) => textAlign || 'start'};
  font-size: 1.2rem;
  padding: 0.25rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 1.4rem;
    text-align: start;
    margin: 0;
  }
`;

export const StyledCompanyInfo = () => {
  return (
    <>
      <StyledHeader>Company</StyledHeader>
      <CompanyInfoWrapper>
        <StyledArticle>
          <GridItem>Name:</GridItem>
          <GridItem textAlign="end">MANSA GROUP</GridItem>
          <GridItem>SIRET:</GridItem>
          <GridItem textAlign="end">837 837 837 837</GridItem>
          <GridItem>Address:</GridItem>
          <GridItem textAlign="end">112 AV DE PARIS 94300 VINCENNES</GridItem>
        </StyledArticle>
      </CompanyInfoWrapper>
    </>
  );
};
