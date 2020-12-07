import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const notes = data.allMarkdownRemark.nodes
  return (
    <main className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none sm:max-w-none lg:max-w-none xl:max-w-none">
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.frontmatter.title}>{note.frontmatter.title}</li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`
