import * as React from "react"
import Navigation from "components/navigation"
import Footer from "components/footer"
import BackToTop from "components/backToTop";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styled/theme";
import { GlobalStyles } from "styled/global";
import { useContext } from "providers/appProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navigation />
      <>{children}</>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}

export default Layout
