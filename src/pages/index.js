import React from 'react';
import Link from 'gatsby-link';
import HeroCarousel from '../components/HeroCarousel';
import Testimonial from '../components/Testimonial';
import Video from '../components/Video';

export default () => (
  <section>
    <HeroCarousel />
    <Video url="https://www.youtube.com/embed/NHAKai0Z6sA?rel=0" />
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
