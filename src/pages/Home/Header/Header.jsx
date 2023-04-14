import React from 'react'
import Profile from '../../../assets/jpg/profile.jpg'
import { Header, HeaderH1 } from '../../../ui/Header.styled'
import { SectionProfile, ProfileDetails } from '../../../ui/SectionProfile.styled'
import { SectionHeader } from '../../../ui/SectionHeader.styled'
import { Button, AddButton } from '../../../ui/Button'
import { IoIosLogOut, IoMdAdd } from "react-icons/io"

function HomeHeader() {
    return (
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
    )
}

export default HomeHeader