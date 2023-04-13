import React from 'react'
import Profile from '../../assets/jpg/profile.jpg'
import { Container } from '../../ui/Container.styled'
import { Header, HeaderH1 } from '../../ui/Header.styled'
import { SectionProfile, ProfileDetails } from '../../ui/SectionProfile.styled'
import { SectionHeader } from '../../ui/SectionHeader.styled'
import { Main } from '../../ui/Main.styled'
import { GridContainer, GridItems, GridDoneItems, StickyNote } from '../../ui/GridContainer.styled'
import { Button, AddButton } from '../../ui/Button'
import { IoIosLogOut, IoMdAdd } from "react-icons/io"

function Home() {
    return (
        <Container>
            <Header>
                <SectionProfile>
                    <ProfileDetails>
                        <img src={Profile} alt="User Profile" />
                        Welcome back<span> Stephanie</span>
                    </ProfileDetails>
                    <Button>
                        Logout
                        <IoIosLogOut size="1.2rem" />
                    </Button>
                </SectionProfile>
                <SectionHeader>
                    <HeaderH1>Sticky Notes</HeaderH1>
                    <AddButton><IoMdAdd /></AddButton>
                </SectionHeader>
            </Header>
            <Main>
                <GridContainer>
                    <GridItems>
                        <h2>All tasks</h2>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                    </GridItems>
                    <GridItems>
                        <h2>To do</h2>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                    </GridItems>
                    <GridDoneItems>
                        <h2>Done</h2>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                        <StickyNote>
                            <span className='title'>This is the tasks title example</span>
                            <span className='date'>4th Jan 2023</span>
                            <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                        </StickyNote>
                    </GridDoneItems>
                </GridContainer>
            </Main>
        </Container>
    )
}

export default Home