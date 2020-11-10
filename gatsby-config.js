/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/*

https://www.gatsbyjs.org/docs/centralizing-your-sites-navigation/

*/

/*

Reading data from JSON
https://itnext.io/reading-data-from-a-json-file-with-gatsby-graphql-572b18ab98a
https://dimitr.im/using-json-with-gatsby
https://www.gatsbyjs.com/docs/sourcing-content-from-json-or-yaml/

*/

var path = require("path")

module.exports = {
  siteMetadata: {
    title: `GuteTeknik`,
    siteUrl: `https://guteteknik.netlify.app`,
    author: `Felix Thålin`,
  },
  plugins: [
    `gatsby-transformer-json`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        root: __dirname,
        inlineCode: {
          marker: "•",
        },
        defaultLayouts: {
          slides: require.resolve("./src/templates/slide-template.js"),
          default: require.resolve("./src/templates/page-template.js"),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Default Dark+`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve:"@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 500
            }
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/slides`,
    //     name: `slides`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pageinfo`,
        name: `pageinfo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Start`,
        // exlude: optional, include to overwrite these default excluded pages
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        useClassNames: true,
      },
    },
  ],
}
