import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { makeStyles } from "@material-ui/core/styles"
import { slugify } from "../utils/slugify"
import SEO from "../components/seo"
import { DiscussionEmbed } from "disqus-react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import "../fonts/CourierPrime-Regular.ttf"

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
    marginTop: "1rem",
    marginBottom: "0.7rem",
    margin: "auto",
    fontSize: "1.1rem",
  },
  commentSection: {
    margin: "1.5rem",
  },
  image: {
    width: "60%",
    marginLeft: "50%",
    transform: "translate(-50%)",
    marginTop: "1rem",
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      marginBottom: "0.5rem",
    },
  },
  code: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    backgroundColor: "#c4c4c4",
    fontFamily: "courier",
    lineHeight: "2rem",
    padding: "0.3rem 1.5rem",
  },
  subheading: {
    marginTop: "3rem",
    marginBottom: "1rem",
    width: "90%",
    margin: "auto",
  },
  subsubheading: {
    fontSize: "1.1rem",
    width: "90%",
    fontWeight: "bold",
    marginTop: "1.5rem",
    marginBottom: "1rem",
    margin: "auto",
  },
}))

const BlogTemplate = props => {
  const tagArray = props.data.contentfulBlogWithDescription.tags.split(", ")

  const classes = useStyles()

  // change baseURL to working URL after deploying
  const baseURL = "https://codeblog-sriramgoparaju-blog/blog/"
  const disqusShortname = "codeblog-sriramgoparaju-blog"
  const disqusConfig = {
    identifier: props.data.contentfulBlogWithDescription.id,
    title: props.data.contentfulBlogWithDescription.title,
    url: baseURL + props.data.contentfulBlogWithDescription.slug,
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <h2 className={classes.subheading}>{children}</h2>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h3 className={classes.subsubheading}>{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={classes.body}>{children}</p>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img
          className={classes.image}
          src={node.data.target.fields.file["en-US"].url}
          alt="Support"
        ></img>
      ),
    },
    renderMark: {
      [MARKS.CODE]: text => <div className={classes.code}>{text}</div>,
    },
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
                key={idx}
                style={{ textDecoration: "none" }}
                to={`/tags/${slugify(tag)}`}
              >
                <p className={classes.tag}>{tag}</p>
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
        {documentToReactComponents(
          props.data.contentfulBlogWithDescription.body.json,
          options
        )}
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
