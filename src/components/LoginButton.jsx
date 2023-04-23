import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { IoIosLogIn } from "react-icons/io"
import { Button } from '../ui/Button'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  const handleClick = () => {
    window.localStorage.removeItem("task-list");
    loginWithRedirect()
  }

  return (
    <Button onClick={handleClick}>
      Login
      <IoIosLogIn size="1.2rem" />
    </Button>
  )
}

export default LoginButton