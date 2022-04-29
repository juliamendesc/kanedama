import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Title, TitleSpan } from 'styles/core';

export const ProfileSection = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  width: 200px;
  margin: 0 auto;

  @media (min-width: ${theme.mobile.medium}) {
    ${theme.typography.h1};
    grid-template-columns: 0.1fr 1fr;
    text-align: start;
    margin: 0;
  }
`;

export const ProfileAvatar = styled.img<{ width?: string; height?: string }>`
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '50px'};
  place-self: center;
  border-radius: 50%;
  margin-right: 1rem;

  @media (min-width: ${theme.mobile.medium}) {
    width: ${({ width }) => width || '75px'};
    height: ${({ height }) => height || '75px'};
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

const ProfileCardHeader = ({ name, lastname, avatar, width, height }: ProfileCardProps) => (
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
    <Title letterSpacing="0.0075em" margin="0 10rem 0 0.5rem">
      <TitleSpan textTransform="uppercase" margin="0 0.5rem 0 0">
        {lastname}
      </TitleSpan>
      {name}
    </Title>
  </ProfileSection>
);

export default ProfileCardHeader;
