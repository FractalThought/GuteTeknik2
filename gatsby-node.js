const Promise = require("bluebird")
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
        allMdx {
          edges {
            node {
              body
              fields {
                slug
                collection
              }
            }
          }
        }
      }
    `).then(results => {
      const allEdges = results.data.allMdx.edges

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

// function makePagesFromMdx({ graphql, actions }) {
//   const pageTemplate = path.resolve("./src/templates/page.js")
//   const { errors, data } = graphql(
//     `
//       {
//         allMdx(filter: { fields: { collection: { eq: "pages" } } }) {
//           edges {
//             node {
//               body
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   if (errors) {
//     throw new Error("There was an error")
//   }
//   const pages = data.allMdx.edges
//   pages.forEach((page, i) => {
//     console.log(`in foreach: ${page.node.fields.slug}`)
//     actions.createPage({
//       path: `${page.node.fields.slug}`,
//       component: pageTemplate,
//       context: {
//         slug: page.node.fields.slug,
//         collection: "pages",
//         pathPrefix: "",
//       },
//     })
//   })
// }

// function makeSlidesFromMdx({ graphql, actions }) {
//   const slideTemplate = path.resolve("./src/templates/slide.js")
//   const { errors, data } = graphql(
//     `
//       {
//         allMdx(filter: { fields: { collection: { eq: "slides" } } }) {
//           edges {
//             node {
//               body
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `
//   )
//   if (errors) {
//     throw new Error("There was an error")
//   }
//   const slides = data.allMdx.edges
//   slides.forEach((slide, i) => {
//     actions.createPage({
//       path: `${slide.node.fields.slug}`,
//       component: slideTemplate,
//       context: {
//         slug: slide.node.fields.slug,
//         collection: "slides",
//         pathPrefix: "/slide",
//       },
//     })
//   })
// }

// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     makePagesFromMdx({ graphql, actions })
//     makeSlidesFromMdx({ graphql, actions })
//     resolve()
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `Mdx`) {
//     // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

//     // This is where we add our own custom fields to each node
//     const generatedSlug = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value: node.frontmatter.slug
//         ? `/${node.frontmatter.slug}/`
//         : generatedSlug,
//     })

//     // Add it to a collection
//     createNodeField({
//       name: `collection`,
//       node,
//       value: getNode(node.parent).sourceInstanceName,
//     })
//   }
// }
