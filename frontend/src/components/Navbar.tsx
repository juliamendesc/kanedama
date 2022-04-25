import styled from 'styled-components';

const Header = styled.header`
  background: ${({ theme }) => theme.colors.white};
  height: 3rem;
  display: flex;
  align-content: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.mobile.medium})  {
    height:5rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.large})  {
    justify-content: flex-start;
  }
`;

const HeaderLogo = styled.p`
  background: inherit;
  ${({ theme }) => theme.typography.headerLogo};
  color: ${({ theme }) => theme.colors.mansaPurple};
  letter-spacing: 0.025rem;
  font-size: 2.5rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 3.5rem;
    margin: 0.25rem 5rem;
  }
`;

const HeaderSpan = styled.span`
  ${({ theme }) => theme.typography.headerLogo};
  color: ${({ theme }) => theme.colors.mansaRed};
`;

export const StyledHeader = () => {
  return (
    <Header>
      <HeaderLogo>
        Mansa
        <HeaderSpan>.</HeaderSpan>
      </HeaderLogo>
    </Header>
  );
};
