import React from 'react';
import Header from '../components/header'

const IndexPage = ({ data }) => (
    <Header siteTitle={data.site.siteMetadata.title} />
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