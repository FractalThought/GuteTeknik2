const Promise = require("bluebird")
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

async function makePagesFromMdx({ graphql, actions }) {
  const pageTemplate = path.resolve("./src/templates/page.js")
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "page" } } }) {
          edges {
            node {
              body
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  if (errors) {
    throw new Error("There was an error")
  }
  const pages = data.allMdx.edges
  pages.forEach((page, i) => {
    actions.createPage({
      path: page.node.fields.slug,
      component: pageTemplate,
      context: {
        slug: page.node.fields.slug,
        collection: "page",
        pathPrefix: "",
      },
    })
  })
}

async function makeSlidesFromMdx({ graphql, actions }) {
  const slideTemplate = path.resolve("./src/templates/slide.js")
  const { errors, data } = await graphql(
    `
      {
        allMdx(filter: { fields: { collection: { eq: "slide" } } }) {
          edges {
            node {
              body
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  if (errors) {
    throw new Error("There was an error")
  }
  const slides = data.allMdx.edges
  slides.forEach((slide, i) => {
    actions.createPage({
      path: `/slide${slide.node.fields.slug}`,
      component: slideTemplate,
      context: {
        slug: slide.node.fields.slug,
        collection: "slide",
        pathPrefix: "/slide",
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await Promise.all([
    makePagesFromMdx({ graphql, actions }),
    makeSlidesFromMdx({ graphql, actions }),
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be. Otherwise I want to create one automatically

    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    })

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    })
  }
}
