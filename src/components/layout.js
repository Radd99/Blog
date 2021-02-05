import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { CssBaseline } from "@material-ui/core"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <CssBaseline />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 5rem 1.5rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            position: "relative",
            bottom: 0,
            left: 0,
            width: "100%",
            textAlign: "center",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Code Blog © {new Date().getFullYear()}, Build by Radd
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
