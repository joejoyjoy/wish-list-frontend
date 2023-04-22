import React, { useContext } from 'react'
import { TaskContext } from '../../../context/TasksProvider'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../../../components/LoginButton'
import { LogoutButton } from '../../../components/LogoutButton'
import GrayProfile from '../../../assets/jpg/person-profile-gray.jpg'
import { Header, HeaderH1 } from '../../../ui/Header.styled'
import { SectionProfile, ProfileDetails } from '../../../ui/SectionProfile.styled'
import { SectionHeader } from '../../../ui/SectionHeader.styled'
import { AddButton } from '../../../ui/Button'

const HomeHeader = () => {
  const { user } = useAuth0()
  const { setCreatingTasks } = useContext(TaskContext)

  const handleClick = () => {
    setCreatingTasks(true)
  }

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
        <HeaderH1>Task system</HeaderH1>
        <AddButton onClick={handleClick} id="addTask" > + </AddButton>
      </SectionHeader>
    </Header>
  )
}

export default HomeHeader