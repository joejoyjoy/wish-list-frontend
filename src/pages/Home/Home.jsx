import React from 'react'
import { Container } from '../../ui/Container.styled'
import HomeHeader from './Header/Header'
import HomeMain from './Main/Main'

function Home() {
  return (
    <Container>
      <HomeHeader />
      <HomeMain />
    </Container>
  )
}

export default Home