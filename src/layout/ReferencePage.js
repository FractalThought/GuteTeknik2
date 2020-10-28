import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Sidebar from "./Sidebar"
import ReferenceCard from "../components/ReferenceCard"
import useReferences from "../components/hooks/useReferences"

function ReferencePage({ course, url }) {
  const data = useStaticQuery(graphql`
    query {
      allPageinfoJson {
        edges {
          node {
            name
            link
            chapters {
              title
              link
              pages {
                title
                link
                type
              }
              references {
                title
                link
              }
            }
          }
        }
      }
    }
  `)

  /*
  Remove the .node-intermediate step, filter out the currrent page,
  and reduce down to a single object
  */

  const pageInfo = data.allPageinfoJson.edges
    .map(page => {
      return page.node
    })
    .filter(node => {
      return node.link === course
    })[0]

  const referenceInfo = useReferences(pageInfo)

  // Use string split for url
  let urlData = null

  if (typeof url !== "undefined" && url != null) {
    const urlArray = url.split("/")
    urlData = urlArray.filter(data => data !== "")
  }

  return (
    <>
      <Header mainPage={course} />
      <div id="main-wrapper">
        <aside className="left">
          <Sidebar url={urlData} currentPageData={pageInfo} />
        </aside>
        <main>
          <h1 className="page-heading">Referenser</h1>
          <ReferenceCard course={course} references={referenceInfo} />
        </main>
        <aside className="right"></aside>
      </div>
    </>
  )
}

export default ReferencePage
