/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/*

https://www.gatsbyjs.org/docs/centralizing-your-sites-navigation/

*/

var path = require("path")

module.exports = {
  siteMetadata: {
    title: `GuteTeknik`,
    siteUrl: `https://guteteknik.netlify.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `page`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/slides`,
        name: `slide`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    /*
    https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/
    */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Default Dark+`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: `Default Dark+`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 900,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
        // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
        useClassNames: true,
      },
    },
  ],
}
