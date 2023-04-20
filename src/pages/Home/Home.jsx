import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Container } from '../../ui/Container.styled'
import HomeHeader from './Header/Header'
import HomeMain from './Main/Main'
import Sidebar from '../../components/Sidebar/sidebar'
import Backdrop from '../../components/Sidebar/backdrop'

const Home = () => {
  const { isLoading } = useAuth0()

  if(isLoading) return <h1>Loading...</h1>
  
  return (
    <Container>
      <HomeHeader />
      <HomeMain />
      <Sidebar />
      <Backdrop />
    </Container>
  )
}

export default Home