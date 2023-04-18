import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../ui/Button'
import { IoIosLogOut } from "react-icons/io"

export const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin})}>
      Logout
      <IoIosLogOut size="1.2rem" />
    </Button>
  )
}

export default LogoutButton