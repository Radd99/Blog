import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogContainer from "../components/BlogContainer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogWithDescription(
        sort: { fields: createdAt, order: DESC }
      ) {
        edges {
          node {
            node_locale
            title
            author
            slug
            tags
            description {
              content {
                content {
                  value
                }
              }
            }
            thumbnail {
              file {
                url
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const displayArray = data.allContentfulBlogWithDescription.edges.filter(
    edge => edge.node.node_locale === "en-US"
  )

  return (
    <Layout>
      <SEO title="Home" />
      {displayArray.map(edge => {
        return (
          <BlogContainer
            title={edge.node.title}
            date={edge.node.createdAt}
            thumbnail={edge.node.thumbnail.file.url}
            tags={edge.node.tags}
            description={edge.node.description.content[0].content[0].value}
            key={edge.node.title}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
