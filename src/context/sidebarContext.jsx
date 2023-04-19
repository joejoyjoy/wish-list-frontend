import React, { useState, createContext } from "react";

export const sidebarContext = createContext()

function sidebarContextProvider(props) {

  // Side bar shopping card open/close
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  const value = { sidebar, toggleSidebar}

  return (
    <sidebarContext.Provider value={value}>
      {props.children}
    </sidebarContext.Provider>
  )
}

export default sidebarContextProvider;