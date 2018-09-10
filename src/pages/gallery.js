import React from 'react';
import PhotoGrid from '../components/PhotoGrid';
import PageHeader from '../components/PageHeader';
import { gallery } from '../img/headers';

export default ({ data }) => {
  const photos = data.allImageSharp.edges.map(edge => ({
    thumbnail: edge.node.resize.src,
    src: edge.node.original.src,
  }));

  return (
    <section className="gallery-section section is-paddingless has-text-centered">
      <PageHeader image={gallery} />
      <container className="container is-fluid">
        <PhotoGrid photos={photos} />
      </container>
    </section>
  );
};

export const query = graphql`
  query GalleryQuery {
    allImageSharp(filter: { id: { regex: "/portfolio/" } }) {
      edges {
        node {
          original {
            src
          }
          resize(width: 400) {
            src
          }
        }
      }
    }
  }
`;
