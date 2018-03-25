import React from 'react';
import Link from 'gatsby-link';

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Professional Makeup Artist</h1>
            <h2 className="subtitle">
              Whatever the occasion is, be sure that my professional make up work
              and products will make you shine and stand out
            </h2>
          </div>
        </div>
      </section>
    );
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
