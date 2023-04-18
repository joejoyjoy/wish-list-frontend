import { Auth0Provider } from '@auth0/auth0-react'
import { GlobalStyle } from './ui/GlobalStyles'
import { Home } from './pages'

export const App = () => {
  return (
    <div className="App">
      <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
        audience={import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE}
      >
        <Home />
      </Auth0Provider>
      <GlobalStyle />
    </div>
  )
}

export default App
