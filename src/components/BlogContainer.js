import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import "fontsource-roboto"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import { slugify } from "../utils/slugify"

const useStyles = makeStyles(theme => ({
  container: {
    width: "85%",
    margin: "auto",
    display: "flex",
    padding: theme.spacing(2),
    marginTop: "2rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "100%",
    },
  },
  imageSection: {
    height: "100%",
    width: "90%",
    display: "flex",
    verticalAlign: "middle",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "auto",
    },
  },
  image: {
    width: "90%",
    maxHeight: "95%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "auto",
    },
  },
  textSection: {
    padding: theme.spacing(1, 2),
    width: "130%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      marginLeft: theme.spacing(1),
      margin: "auto",
      textAlign: "center",
    },
  },
  title: {
    fontSize: "1.3rem",
    marginTop: "0.5rem",
    marginBottom: 0,
  },
  date: {
    marginTop: "0.2rem",
    fontSize: "0.9rem",
    color: "#555",
  },
  tags: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
  tag: {
    color: "#2196F3",
    fontSize: "1rem",
    marginTop: "0.2rem",
    marginBottom: 0,
    marginRight: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textDecoration: "underline",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginRight: 0,
    },
  },
  description: {
    marginTop: "0.3rem",
    paddingTop: "0",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    color: "#2196F3",
    margin: 0,
    padding: "0.3rem",
    fontWeight: "bold",
  },
}))

function BlogContainer({ thumbnail, title, date, tags, description, slug }) {
  const classes = useStyles()

  const tagArray = tags.split(" ")

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <img className={classes.image} src={thumbnail} alt="planets" />
      </div>
      <div className={classes.textSection}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.date}>{date}</p>

        <div className={classes.tags}>
          {tagArray.map((tag, idx) => {
            return (
              <Link
                key={idx}
                to={`/tags/${slugify(tag)}`}
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                <p className={classes.tag}>{tag}</p>
              </Link>
            )
          })}
        </div>

        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.root}>
          <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
            <Button className={classes.button}>Read More...</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogContainer
