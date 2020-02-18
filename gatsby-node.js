const Promise = require("bluebird")
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

/*

https://chipcullen.com/making-multiple-content-types-in-gatsby/

*/

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })

    const slug = createFilePath({ node, getNode })

    //console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                collection
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      const allEdges = results.data.allMarkdownRemark.edges

      const slideEdges = allEdges.filter(
        edge => edge.node.fields.collection === `slides`
      )
      const pageEdges = allEdges.filter(
        edge => edge.node.fields.collection === `pages`
      )

      slideEdges.forEach(({ node }) => {
        createPage({
          path: `slides/${node.fields.slug}`,
          component: path.resolve(`./src/templates/slide.js`),
          context: {
            slug: `slides/${node.fields.slug}`,
          },
        })
      })

      pageEdges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      resolve()
    })
  })
}
