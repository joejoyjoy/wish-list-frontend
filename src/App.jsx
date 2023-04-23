import { Auth0Provider } from '@auth0/auth0-react'
import DataBaseProvider from './context/DataBaseProvider'
import TasksProvider from './context/TasksProvider'
import SidebarContextProvider from './context/sidebarContext'
import LocalTasksProvider from './context/localTasksProvider'
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
        <DataBaseProvider>
          <TasksProvider>
            <SidebarContextProvider>
              <LocalTasksProvider>
                <Home />
              </LocalTasksProvider>
            </SidebarContextProvider>
          </TasksProvider>
        </DataBaseProvider>
      </Auth0Provider>
      <GlobalStyle />
    </div>
  )
}

export default App
