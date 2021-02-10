import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { makeStyles } from "@material-ui/core/styles"
import { slugify } from "../utils/slugify"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogWithDescription(slug: { eq: $slug }) {
      id
      title
      tags
      slug
      description {
        content {
          content {
            value
          }
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

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
    textAlign: "center",
  },
  date: {
    fontSize: "1rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    color: "#555",
    textAlign: "center",
  },
  tags: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  tag: {
    color: "#2196F3",
    fontSize: "1.3rem",
    marginTop: "0.2rem",
    marginBottom: "1rem",
    marginRight: "2.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
  description: {
    color: "#777",
    width: "80%",
    marginTop: "2rem",
    margin: "auto",
    fontSize: "1.1rem",
  },
  body: {
    width: "90%",
    marginTop: "2rem",
    margin: "auto",
    fontSize: "1rem",
  },
  commentSection: {
    margin: "1.5rem",
  },
}))

const BlogTemplate = props => {
  const tagArray = props.data.contentfulBlogWithDescription.tags.split(" ")

  const classes = useStyles()

  // change baseURL to working URL after deploying
  const baseURL = "https://codeblog-sriramgoparaju-blog/blog/"
  const disqusShortname = "codeblog-sriramgoparaju-blog"
  const disqusConfig = {
    identifier: props.data.contentfulBlogWithDescription.id,
    title: props.data.contentfulBlogWithDescription.title,
    url: baseURL + props.data.contentfulBlogWithDescription.slug,
  }

  return (
    <Layout>
      <SEO title={`${props.data.contentfulBlogWithDescription.title}`} />
      <div className={classes.container}>
        <h1 className={classes.title}>
          {props.data.contentfulBlogWithDescription.title}
        </h1>
        <p className={classes.date}>
          {props.data.contentfulBlogWithDescription.createdAt}
        </p>
        <div className={classes.tags}>
          {tagArray.map((tag, idx) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/tags/${slugify(tag)}`}
              >
                <p key={idx} className={classes.tag}>
                  {tag}
                </p>
              </Link>
            )
          })}
        </div>
        <p className={classes.description}>
          {
            props.data.contentfulBlogWithDescription.description.content[0]
              .content[0].value
          }
        </p>
        <p className={classes.body}>
          {documentToReactComponents(
            props.data.contentfulBlogWithDescription.body.json
          )}
        </p>
      </div>
      <DiscussionEmbed
        className={classes.commentSection}
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Layout>
  )
}

export default BlogTemplate
