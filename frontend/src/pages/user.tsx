import React from 'react';
import styled from 'styled-components';
import Spinner from 'components/Spinner';
import { StyledHeader } from '@/components/Header';
import useFetcher from 'hooks/useFetcher';
import BASE_URL from 'libs/constants';
import { ComponentArticle, ComponentItem, Title, Wrapper } from 'styles/core';
import GlobalStyle from 'styles/global';

type UserProfileProps = {
  name: {
    first: string;
    last: string;
  };
  login: { username: string };
  dob: { age: number };
  location: { city: string; country: string };
  picture: { thumbnail?: string; large?: string };
};

const Card = styled.div`
  width: 100%;
  height: 37.4rem;
  max-width: 35rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  border-radius: 1.5rem;
  margin: 50px auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2rem 3rem -1rem ${({ theme }) => theme.colors.backgroundMediumColor};
  .divider {
    width: 100%;
    height: 0.1rem;
    background-color: #e8e9ec;
  }
`;

const Avatar = styled.div`
  z-index: 1;
  border-radius: 50%;
  margin-top: 4rem;
  position: relative;
  align-items: center;
  display: inline-flex;
  img {
    width: 9.6rem;
    height: 9.6rem;
    border-radius: 50%;
    border: 0.5rem solid var(--color-white);
    @media (min-width: 480px) {
      width: 10.6rem;
      height: 10.6rem;
    }
  }
`;

const UserDetails = styled(ComponentArticle)`
  grid-template-columns: repeat(1, 0.4fr 1fr);
  place-items: center;

  @media (min-width: ${({ theme }) => theme.mobile.medium}) {
    grid-template-columns: repeat(1, 0.1fr 1fr);
  }
`;

const UserItem = styled(ComponentItem)`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  padding: 1.5rem;

@media (min-width: ${({ theme }) => theme.mobile.medium}) {
  font-size: 1.4rem;
  text-align: start;
  margin: 0;
}
`;

export default function ProfileCard() {
  const { data: userInfo } = useFetcher(BASE_URL.user) as any;
  if (!userInfo) return <Spinner />;
  const userProfile = userInfo.results[0] as UserProfileProps;

  return (
    <>
      <GlobalStyle />
      <StyledHeader />
      <Wrapper>
        <Card>
          <Avatar>
            <img src={userProfile.picture.large} alt="avatar" />
          </Avatar>

          <Title>
            {userProfile.name.first} {userProfile.name.last}
          </Title>
          <UserDetails>
            <UserItem data-testid="userName">Username:</UserItem>
            <UserItem>{userProfile.login.username}</UserItem>
            <UserItem>Age:</UserItem> <UserItem>{userProfile.dob.age}</UserItem>
            <UserItem>Location:</UserItem>{' '}
            <UserItem>
              {userProfile.location.city} - {userProfile.location.country}
            </UserItem>
          </UserDetails>
        </Card>
      </Wrapper>
    </>
  );
}
