import React from 'react'
import { CircleContainer } from './styles';

interface UserInfo {
  initials: string;
}

const UserIndicator = ({initials}: UserInfo) => {
  return (
    <CircleContainer>
      {initials}
    </CircleContainer>
  )
}

export default UserIndicator;
