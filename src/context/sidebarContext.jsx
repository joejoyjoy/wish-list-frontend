import React, { useState, createContext } from "react";

export const sidebarContext = createContext()

function sidebarContextProvider(props) {

  // Side bar shopping card open/close
  const [sidebar, setSidebar] = useState(false);
  const [sidebarData, setSidebarData] = useState("");

  const toggleSidebar = (id, index) => {
    setSidebar((prevState) => !prevState)
    setSidebarData(id, index)
  }

  const value = { sidebar, toggleSidebar, sidebarData, setSidebarData}

  return (
    <sidebarContext.Provider value={value}>
      {props.children}
    </sidebarContext.Provider>
  )
}

export default sidebarContextProvider;