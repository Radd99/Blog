import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import "fontsource-roboto"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  container: {
    width: "85%",
    margin: "auto",
    display: "flex",
    padding: theme.spacing(2),
    marginTop: "4rem",
    marginBottom: "2rem",
  },
  imageSection: {
    height: "100%",
    width: "100%",
    display: "flex",
    verticalAlign: "middle",
    justifyContent: "center",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "95%",
    margin: "auto",
  },
  textSection: {
    padding: theme.spacing(1, 2),
    width: "130%",
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
  },
  tag: {
    color: "#2196F3",
    fontSize: "1rem",
    marginTop: "0.2rem",
    marginBottom: 0,
    marginRight: "2.5rem",
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textDecoration: "underline",
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

function BlogContainer({ thumbnail, title, date, tags, description }) {
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
              <p key={idx} className={classes.tag}>
                {tag}
              </p>
            )
          })}
        </div>

        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.root}>
          <Button className={classes.button}>Read More...</Button>
        </div>
      </div>
    </div>
  )
}

export default BlogContainer
