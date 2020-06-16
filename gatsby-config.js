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
    siteUrl: `https://guteteknik.netlify.app`,
    author: `Felix Thålin`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/slides`,
        name: `slides`,
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
        // defaultLayouts: {
        //   default: require.resolve(`./src/components/layout.js`),
        // },
        // Need to add default-layout for each view
        // Views needs to be outside of pages-directory, pages-directory defaults to "default"
        // Need to check how a layout works with mdx
        // https://www.digitalocean.com/community/tutorials/gatsbyjs-mdx-in-gatsby
        // Check this instead: https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          // {
          //   resolve: `gatsby-remark-vscode`, //causes the crash...
          //   options: {
          //     theme: `Default Dark+`,
          //   },
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
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
        // optional: switch to className styling
        // see `useClassNames example with `AutoGen` below
        useClassNames: true,
      },
    },
  ],
}
