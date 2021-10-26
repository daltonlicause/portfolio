import React from "react"
import Navigation from "../navigation"
import Footer from "../footer"

import { ThemeProvider } from "styled-components";
import { isDarkMode } from "../../helpers/isDarkMode";
import { lightTheme, darkTheme } from "../../styled/theme";
import { GlobalStyles } from "../../styled/global";

const Layout = (props) => {
  const [theme, toggleTheme, componentMounted] = isDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navigation theme={theme} toggleTheme={toggleTheme}/>
        <>{props.children}</>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
