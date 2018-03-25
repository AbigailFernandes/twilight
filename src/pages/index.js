import React from 'react';
import Link from 'gatsby-link';
import HeroCarousel from '../components/HeroCarousel';

export default class IndexPage extends React.Component {
  render() {
    return <HeroCarousel />;
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
