import React, { useState, createContext } from 'react';
import initialData from '../db/initial-data';

export const DataBaseContext = createContext()

const DataBaseProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState(initialData)

  return (
    <DataBaseContext.Provider value={{ dataBase, setDataBase }}>
      {children}
    </DataBaseContext.Provider>
  )
}

export default DataBaseProvider