import React from 'react';
import Link from 'gatsby-link';
import Carousel from '../components/Carousel';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          {Array.from({ length: 10 }, (_, i) => <div className='carousel__item box'>Item {i}</div>)}
        </Carousel>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
