import styled from 'styled-components';
import { Title, TitleSpan } from 'styles/core';

export const ProfileSection = styled.section`
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

export const ProfileAvatar = styled.img<{width?: string, height?: string}>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  place-self: center;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    width: ${({ width }) => width || '100px'};
    height: ${({ height }) => height || '100px'};
    justify-self: start;
  }
`;

type ProfileCardProps = {
  name: string;
  lastname: string;
  avatar?: string;
  width?: string;
  height?: string;
};

export default function ProfileCardHeader ({ name, lastname, avatar, width, height }: ProfileCardProps) {
  return (
    <ProfileSection>
      <ProfileAvatar
        src={
          avatar ??
          `https://avatar.oxro.io/avatar.svg?name=${name}+${lastname}&background=686DE0&rounded=50%`
        }
        alt="avatar"
        width={width}
        height={height}
      />
      <Title letterSpacing='0.0075em' margin='0 0 0 0.5rem'>
        <TitleSpan textTransform='uppercase' margin='0 0.5rem 0 0'>{' '}{lastname}</TitleSpan>
        {name}
      </Title>
    </ProfileSection>
  );
};
