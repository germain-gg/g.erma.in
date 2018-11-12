import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import socialIconImgFactory from '../components/socialicon';

import { InlineList } from '../components/styled';

import Layout from '../components/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPage {
        site {
          siteMetadata {
            siteUrl,
            name,
            title,
            headerName,
            description,
            accounts {
              id
              name
              url
            }
          }
        }
      }
    `}
    render={data => (
      <Layout data={data}>
        <p>
          <span role="img" aria-labelledby="Heart">❣️</span>
          Lover of the web
        </p>
        <p>
          <span role="img" aria-labelledby="Nerd face">🤓</span>
          Open source rookie
        </p>
        <p>
          <span role="img" aria-labelledby="United Kingdom flag">🇬🇧</span>
          Always exploring London
        </p>
        <hr/>
        <InlineList>
          { data.site.siteMetadata.accounts.map(account => {
            const Img = socialIconImgFactory(account.id);
            return (<li key={account.id}>
              <a href={account.url} target="_blank" rel="noopener noreferrer">
                <Img alt={`${account.name}'s icon`} width="32px" />
              </a>
            </li>)
          })}
        </InlineList>
      </Layout>
    )}
  />
);

export default IndexPage;
