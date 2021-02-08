import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query All_Instagram_Query {
      allInstagramContent(limit: 9) {
        nodes {
          id
          caption {
            text
          }
          user {
            username
          }
          link
          localImage {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstagramContent.nodes.map(node => ({
    ...node.localImage.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.user,
    images: node.images,
    link: node.link,
  }))
}

export default useInstagram
