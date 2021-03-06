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
    <div style={{ overflow: "hidden" }}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <CssBaseline />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 0rem 1rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            width: "100%",
            textAlign: "center",
            color: "black",
          }}
        >
          Code Blog © {new Date().getFullYear()}, Built by Sriram Goparaju
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
