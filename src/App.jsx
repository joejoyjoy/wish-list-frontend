import { Auth0Provider } from '@auth0/auth0-react'
import SidebarContextProvider from './context/sidebarContext'
import TasksProvider from './context/TasksProvider'
import { Home } from './pages'
import { GlobalStyle } from './ui/GlobalStyles'

export const App = () => {
  return (
    <div className="App">
      <Auth0Provider
        domain={import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
        audience={import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE}
      >
        <TasksProvider>
          <SidebarContextProvider>
            <Home />
          </SidebarContextProvider>
        </TasksProvider>
      </Auth0Provider>
      <GlobalStyle />
    </div>
  )
}

export default App
