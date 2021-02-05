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
    padding: "0 3rem",
    color: "black",
    marginBottom: "3rem",
  },
  logo: {
    fontSize: "2.2rem",
    fontFamily: "roboto",
  },
  links: {
    fontSize: "1.3rem",
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
      color: "#2196F3",
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
    <Grid container justify="center" className={classes.navbar}>
      <Grid item xs={3} md={2}>
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
      <Grid item container justify="center" xs={false} md={3}>
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
