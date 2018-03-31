import React from 'react';
import Link from 'gatsby-link';

import HeroCarousel from '../components/HeroCarousel';
import Testimonial from '../components/Testimonial';

export default () => (
  <section>
    <HeroCarousel />
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
