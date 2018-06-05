import React from 'react';
import Header from '../components/header'

const IndexPage = ({ data }) => (
    <section role="main">
        <h2>Hello world</h2>
    </section>
);

export default IndexPage;

export const query = graphql`
  query getTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`