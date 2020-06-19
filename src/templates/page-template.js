import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Container from "../components/Container"

const shortcodes = { Link } // Provide common components here

export default ({ children }) => (
  <>
    <h1>PAGE</h1>
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  </>
)
