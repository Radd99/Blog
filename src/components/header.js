import React from "react"
import "fontsource-roboto"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 1rem",
    color: "black",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  logo: {
    fontSize: "2.5rem",
    fontFamily: "roboto",
    marginTop: "0.3rem",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  links: {
    fontSize: "1.5rem",
    fontFamily: "roboto",
    display: "inline",
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    marginTop: "0.5rem",
  },
  gatsbyLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "#2196F3",
      cursor: "pointer",
    },
  },
  gatsbyLinkActive: {
    color: theme.palette.primary.dark,
    textDecoration: "underline",
  },
  gatsbyLogoLink: {
    color: "black",
    textDecoration: "none",
  },
}))

// This is the Navbar
const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <Grid container justify="center" className={classes.navbar}>
      <Grid item sm={12} md={3}>
        <h2 className={classes.logo}>
          <Link className={classes.gatsbyLogoLink} to="/">
            {siteTitle}
          </Link>
        </h2>
      </Grid>

      <Grid
        item
        container
        sm={12}
        md={9}
        justify="center"
        className={classes.navs}
      >
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/about"
          >
            About
          </Link>
        </p>
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/contact"
          >
            Contact
          </Link>
        </p>
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/tags"
          >
            Tags
          </Link>
        </p>
      </Grid>
    </Grid>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
