import React from "react"
import { MDXProvider } from "@mdx-js/react"
import mdxComponents from "./mdxComponents"

function Layout({
  location,
  title,
  children,
  className,
  pageContext,
  path,
  ...rest
}) {
  if (pageContext.layout === "thumbnail") return children
  return (
    <>
      <h2>LAYOUT</h2>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </>
  )
}

export default Layout
