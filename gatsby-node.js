const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })

    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    createNodeField({
      name: "id",
      node,
      value: node.id,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const pagePath = path.resolve(`./src/templates/page-template.js`)
  const slidePath = path.resolve(`./src/templates/slide-template.js`)

  return graphql(`
    query {
      allMdx {
        edges {
          node {
            body
            fields {
              id
              slug
              collection
            }
          }
        }
      }
    }
  `).then(results => {
    if (results.errors) {
      throw results.errors
    }

    const allEdges = results.data.allMdx.edges

    // const slideEdges = allEdges.filter(edge => {
    //   return edge.node.fields.collection === `slides`
    // })
    // const pageEdges = allEdges.filter(edge => {
    //   return edge.node.fields.collection === `pages`
    // })

    allEdges.forEach(({ node }) => {
      if (node.fields.collection === `slides`) {
        createPage({
          path: `/slides${node.fields.slug}`,
          component: slidePath,
          context: {
            slug: `slides${node.fields.slug}`,
            id: node.fields.id,
          },
        })
      } else if (node.fields.collection === `pages`) {
        createPage({
          path: node.fields.slug,
          component: pagePath,
          context: {
            slug: node.fields.slug,
            id: node.fields.id,
          },
        })
      }
    })
  })
}
