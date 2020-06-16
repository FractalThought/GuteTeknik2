const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // console.log(node.internal.type)
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
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pagePath = path.resolve(`./src/templates/page.js`)
  const slidePath = path.resolve(`./src/templates/slide.js`)

  const results = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            body
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `)
  const allEdges = results.data.allMdx.edges

  // const slideEdges = allEdges.filter(edge => {
  //   return edge.node.fields.collection === `slides`
  // })
  // const pageEdges = allEdges.filter(edge => {
  //   return edge.node.fields.collection === `pages`
  // })

  allEdges.forEach(({ node }) => {
    if (node.fields.collection === `slides`) {
      console.log("creating slide")
      createPage({
        path: `slides/${node.fields.slug}`,
        component: slidePath,
        context: {
          slug: `slides/${node.fields.slug}`,
          id: node.id,
        },
      })
    } else if (node.fields.collection === `pages`) {
      console.log("creating page")
      createPage({
        path: node.fields.slug,
        component: pagePath,
        context: {
          slug: node.fields.slug,
          id: node.id,
        },
      })
    }
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
