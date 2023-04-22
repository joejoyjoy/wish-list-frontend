import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const useUser = () => {
  const { user } = useAuth0()
  const checkUser = async () => {
    if (!user) {
      return window.localStorage.removeItem("userID");
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/user/check`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: user.name, email: user.email, picture: user.picture})
      })

      const data = await response.json()

      window.localStorage.setItem("userID", data.id)

    } catch (error) {
      console.error(error);
    }
  }

  return {
    checkUser
  }
}

export default useUser