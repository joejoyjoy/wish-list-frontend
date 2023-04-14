import React, { useState } from 'react'
import Item from '../../../components/Item'
import { Main } from '../../../ui/Main.styled'
import { GridContainer, GridItems, GridDoneItems } from '../../../ui/GridContainer.styled'

function HomeMain() {
    return (
        <Main>
            <GridContainer>
                <GridItems>
                    <h2>All tasks</h2>
                    <Item />
                    <Item />
                    <Item />
                </GridItems>
                <GridItems>
                    <h2>To do</h2>
                    <Item />
                    <Item />
                </GridItems>
                <GridDoneItems>
                    <h2>Done</h2>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </GridDoneItems>
            </GridContainer>
        </Main>
    )
}

export default HomeMain