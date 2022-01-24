import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from "../components/Container";

import mdxComponents from "../components/mdxComponents";
import styled from "styled-components";
import TableOfContent from "../components/TableOfContent";
import RightStickyDiv from "../components/RightStickyDiv";
import AdjacentLinks from "../components/AdjacentLinks";
import { useExtractUrlData } from "../components/hooks/useUrlData";

const ClearDiv = styled.div`
  clear: both;
`;

export const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      body
      fields {
        id
        slug
      }
      frontmatter {
        title
        previous
        next
        related
      }
    }
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
`;

export default function PageTemplate({ pageContext, data }) {
  const page = data.mdx;

  // Just remove the .node-intermediate step
  const navInfo = data.allPageinfoJson.edges.map(page => {
    return page.node;
  });

  // page.frontmatter.attribute

  /*
  TODO: Need to get the children from the MDXProvider "after" it has been rendered
  Is that possible?

  https://mparavano.medium.com/find-filter-react-children-by-type-d9799fb78292

  */

  /*
  # Programmatically generated content

Alternatively, if you're using `MDXRenderer` you can pass any data you want in as a prop and it will be forwarded into the MDX content. So your template can do the same query as above and pass it into your content.

```js
<MDXRenderer relatedPosts={props.data.related} />

https://github.com/ChristopherBiscardi/gatsby-mdx/issues/238


https://mdxjs.com/getting-started/#mdxprovider

  */

  /*

    Need a better name for pageInfo.
    It holds the site navigation info as well as the categorization for all pages
    The use is navigation, so NavInfo is probably a better name
    Then pageInfo can be for the current page and containing frontmatter and slug

  */

  const pageInfo = {
    urlData: useExtractUrlData(page.fields.slug),
    title: page.frontmatter.title,
    frontmatter: page.frontmatter,
  };

  return (
    <Container navInfo={navInfo} pageInfo={pageInfo}>
      <div className="content-container">
        <main>
          <div className="page">
            <h1 className="page-heading">{pageInfo.title}</h1>
            {/* <h1 className="printheader">{pageTitle}</h1> */}
            <MDXProvider components={mdxComponents}>
              <MDXRenderer>{page.body}</MDXRenderer>
            </MDXProvider>
            <ClearDiv></ClearDiv>
            <AdjacentLinks pageInfo={pageInfo} navInfo={navInfo} />
          </div>
        </main>
        <aside>
          <RightStickyDiv>
            <TableOfContent />
          </RightStickyDiv>
        </aside>
      </div>
    </Container>
  );
}
