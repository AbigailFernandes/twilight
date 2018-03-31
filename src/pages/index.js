import React from 'react';
import Link from 'gatsby-link';
import { HeroCarousel, Testimonial, EmbedVideo } from '../components';

export default () => (
  <section>
    <EmbedVideo url="https://www.youtube.com/embed/NHAKai0Z6sA" />
    <Testimonial />
  </section>
);

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
