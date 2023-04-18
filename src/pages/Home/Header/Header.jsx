import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../../../components/LoginButton'
import { LogoutButton } from '../../../components/LogoutButton'
import GrayProfile from '../../../assets/jpg/person-profile-gray.jpg'
import { Header, HeaderH1 } from '../../../ui/Header.styled'
import { SectionProfile, ProfileDetails } from '../../../ui/SectionProfile.styled'
import { SectionHeader } from '../../../ui/SectionHeader.styled'
import { AddButton } from '../../../ui/Button'
import { IoMdAdd } from "react-icons/io"

const HomeHeader = () => {
  const { user } = useAuth0()

  return (
    <Header>
      <SectionProfile>
        <ProfileDetails>
          <img src={user ? user.picture : GrayProfile} alt={user ? user.name : 'User Avatar'} />
          Welcome back<span> {user ? user.given_name : 'User'}</span>
        </ProfileDetails>
        {user ? <LogoutButton /> : <LoginButton />}
      </SectionProfile>
      <SectionHeader>
        <HeaderH1>Sticky Notes</HeaderH1>
        <AddButton><IoMdAdd /></AddButton>
      </SectionHeader>
    </Header>
  )
}

export default HomeHeader