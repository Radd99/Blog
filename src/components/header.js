import PropTypes from "prop-types"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import "fontsource-roboto"
import { Grid } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  navbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 3rem",
    color: "black",
  },
  logo: {
    fontSize: "2rem",
    fontFamily: "roboto",
  },
  links: {
    fontSize: "1.1rem",
    fontFamily: "roboto",
    display: "inline",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    textDecoration: "none",
  },
  gatsbyLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
      cursor: "pointer",
    },
  },
  gatsbyLinkActive: {
    color: theme.palette.primary.dark,
  },
  gatsbyLogoLink: {
    color: "black",
    textDecoration: "none",
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.navbar}>
      <Grid item xs={3} md={2} justify="center">
        <h2 className={classes.logo}>
          <Link className={classes.gatsbyLogoLink} to="/">
            {siteTitle}
          </Link>
        </h2>
      </Grid>
      <Grid
        item
        container
        xs={9}
        md={7}
        justify="center"
        className={classes.navs}
      >
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/about"
          >
            About Us
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
            to="/blogs"
          >
            Blogs
          </Link>
        </p>
      </Grid>
      <Grid item container justify="center" xs={0} md={3}>
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/login"
          >
            Sign In
          </Link>
        </p>
        <p className={classes.links}>
          <Link
            className={classes.gatsbyLink}
            activeClassName={classes.gatsbyLinkActive}
            to="/register"
          >
            Sign Up
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
