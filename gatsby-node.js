const path = require("path")
const _ = require("lodash")
const { slugify } = require("./src/utils/slugify")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogTemplate.js")
  const tagTemplate = path.resolve("./src/templates/TagPageTemplate.js")
  const eachTagTemplate = path.resolve("./src/templates/EachTagPageTemplate.js")
  const res = await graphql(`
    query {
      allContentfulBlogWithDescription {
        edges {
          node {
            tags
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogWithDescription.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  let tagsArray = []
  res.data.allContentfulBlogWithDescription.edges.forEach(edge => {
    const tagString = edge.node.tags
    const tagArray = tagString.split(" ")
    tagArray.forEach(tag => {
      tagsArray.push(tag)
    })
  })

  let tagsCount = {}
  tagsArray.forEach(tag => {
    tagsCount[tag] = (tagsCount[tag] || 0) + 1
  })

  tagsArray = _.uniq(tagsArray)

  createPage({
    component: tagTemplate,
    path: `/tags`,
    context: {
      tagsArray,
      tagsCount,
    },
  })

  tagsArray.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: eachTagTemplate,
      context: { tag },
    })
  })
}
