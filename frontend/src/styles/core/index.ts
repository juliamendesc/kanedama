import styled from 'styled-components';

export const StyledHeader = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.2rem;
  margin: 3rem auto 1rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    font-size: 1.4rem;
    margin: 2rem 0 2rem;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) and (max-width: ${({ theme }) =>
      theme.mobile.large}) {
    margin: 0.75rem;
  }

  @media (min-width: ${({ theme }) => theme.mobile.large}) {
    margin: 0 50rem 0 5rem;
  }
`;

export const ComponentArticle = styled.article<{
  background?: string;
  fontWeight?: string | number;
  color?: string;
}>`
  display: grid;
  grid-template-rows: auto;

  background: ${({ background }) => background || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  color: ${({ color }) => color || 'inherit'};
`;

export const ComponentItem = styled.p<{
  textAlign?: string;
  fontWeight?: string | number;
  margin?: string | number;
}>`
  text-align: ${({ textAlign }) => textAlign || 'start'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  padding: 0.25rem;
`;

export const Title = styled.h1<{ letterSpacing?: string; margin?: string }>`
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'normal'};
  margin-left: ${({ margin }) => margin || '0'};

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    justify-self: start;
    font-size: 3rem;
  }
`;

export const TitleSpan = styled.span<{ textTransform?: string; margin?: string | number }>`
  text-transform: ${({ textTransform }) => textTransform || 'none'};
  margin: ${({ margin }) => margin || 0};
`;
