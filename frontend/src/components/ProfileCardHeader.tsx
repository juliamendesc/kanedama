import styled from 'styled-components';

const ProfileSection = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  margin: 0.5rem auto 0;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    ${({ theme }) => theme.typography.h1};
    margin-left: 0.5rem;
    grid-template-columns: 0.1fr 1fr;
    text-align: start;
  }
`;

const Title = styled.h1`
  letter-spacing: 0.0075em;
  margin-left: 0.5rem;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    justify-self: start;
  }
`;

const TitleSpan = styled.span`
  text-transform: uppercase;
  margin-right: 0.5rem;
`;

const ProfileAvatar = styled.img`
  width: 50px;
  height: 50px;
  place-self: center;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    width: 100px;
    height: 100px;
    justify-self: start;
  }
`;

type ProfileCardProps = {
  name: string;
  lastname: string;
};

export const ProfileCardHeader = ({ name, lastname }: ProfileCardProps) => {
  return (
    <ProfileSection>
      <ProfileAvatar
        src={`https://avatar.oxro.io/avatar.svg?name=${name}+${lastname}&background=686DE0&rounded=50%`}
        alt="avatar"
      />
      <Title>
        <TitleSpan>{lastname}</TitleSpan>
        {name}
      </Title>
    </ProfileSection>
  );
};
