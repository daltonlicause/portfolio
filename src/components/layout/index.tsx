import * as React from "react"
import Navigation from "components/navigation"
import Footer from "components/footer"
import BackToTop from "components/backToTop";

import { ThemeProvider } from "styled-components";
import { isDarkMode } from "helpers/isDarkMode";
import { lightTheme, darkTheme } from "styled/theme";
import { GlobalStyles } from "styled/global";

const Layout = (props: { children: any; }) => {
  const [theme, toggleTheme, componentMounted] = isDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Navigation theme={theme as string} toggleTheme={toggleTheme as () => void}/>
        <>{props.children}</>
        <Footer />
        <BackToTop />
      </>
    </ThemeProvider>
  )
}

export default Layout
