import React from "react"
import Navigation from "../navigation"
import Footer from "../footer"

import "../../assets/scss/base.scss"

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <>{props.children}</>
      <Footer />
    </>
  )
}

export default Layout
