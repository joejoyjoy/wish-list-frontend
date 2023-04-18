import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '../ui/Button'
import { IoIosLogIn } from "react-icons/io"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button onClick={() => loginWithRedirect()}>
      Login
      <IoIosLogIn size="1.2rem" />
    </Button>
  )
}

export default LoginButton