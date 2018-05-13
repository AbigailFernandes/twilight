import React from 'react';
import Link from 'gatsby-link';
import {
  Testimonial,
  EmbedVideo,
  Carousel,
  AboutSection,
  HeroCarousel,
} from '../components';
import { marilynQuote } from '../img/home';
import { testimonials } from '../content/testimonial';

export default () => (
  <section>
    {/* <figure className="image">
      <img src={marilynQuote} />
    </figure> */}
    <HeroCarousel />
    <EmbedVideo url="https://www.youtube.com/embed/NHAKai0Z6sA" />
    <AboutSection />
    <section className="section carousel-section">
      <Carousel>
        {testimonials.map(item => <Testimonial key={item.name} {...item} />)}
      </Carousel>
    </section>
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
