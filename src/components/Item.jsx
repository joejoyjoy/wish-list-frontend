import React, { Fragment } from 'react'
import { StickyNote } from '../ui/GridContainer.styled'

function Item() {

  return (
    <Fragment>
      <StickyNote>
        <span className='title'>This is the tasks title example</span>
        <span className='date'>4th Jan 2023</span>
        <span className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
      </StickyNote>
    </Fragment>
  )

}

export default Item