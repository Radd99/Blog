import { Button, makeStyles } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../utils/slugify"

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "1rem",
    marginBottom: "3rem",
    width: "90%",
    margin: "auto",
  },
  title: {
    fontSize: "2rem",
    marginTop: "2rem",
    marginBottom: 0,
  },
  tags: {
    marginTop: "2rem",
    width: "80%",
    margin: "auto",
    display: "flex",
    flexFlow: "row wrap",
    flexWrap: "wrap",
  },
  tag: {
    marginTop: "0.2rem",
    marginBottom: "1rem",
    marginRight: "5rem",
  },
}))

const TagPageTemplate = ({ pageContext }) => {
  const { tagsArray, tagsCount } = pageContext

  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Tags" />
      <div className={classes.container}>
        <h1 className={classes.title}>Tags</h1>
        <div className={classes.tags}>
          {tagsArray.map(tag => {
            return (
              <div key={tag}>
                <Link
                  to={`/tags/${slugify(tag)}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    className={classes.tag}
                    variant="contained"
                    color="primary"
                  >
                    {tag} - {tagsCount[tag]}
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default TagPageTemplate
