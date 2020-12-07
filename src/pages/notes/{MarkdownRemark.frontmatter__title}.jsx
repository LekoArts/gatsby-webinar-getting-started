import * as React from "react"
import { graphql } from "gatsby"

const Note = ({ data }) => {
  const n = data.markdownRemark
  const { title, date } = n.frontmatter
  return (
    <main className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
      <h1 style={{ marginBottom: "0.25em" }}>{title}</h1>
      <p className="text-gray-600" style={{ marginTop: 0 }}>
        {date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: n.html }} />
    </main>
  )
}

export default Note

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
      html
    }
  }
`
