import {View, Text} from 'react-native';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { lightTheme } from '../Styles/Themes';
import { darkTheme } from '../Styles/Themes';

export const ContextStore = createContext({});
export const ContextProvider = ({children}) => {
  const [Theme, setTheme] = useState(lightTheme); //0 for light 1 for dark

  return (
    <ContextStore.Provider
      value={{
        Theme,
        setTheme,
      }}>
      {children}
    </ContextStore.Provider>
  );
};
