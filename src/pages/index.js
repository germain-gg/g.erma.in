import React from 'react';
import socialIconImgFactory from '../components/socialicon';

import { InlineList } from '../components/styled';

const IndexPage = ({ data }) => (
  <div>
      <p>❣️ Lover of the web</p>
      <p>🤓 Open source rookie</p>
      <p>🇬🇧 Always exploring the streets of London</p>
      <hr/>
      <InlineList>
        { data.site.siteMetadata.accounts.map(account => {
          const Img = socialIconImgFactory(account.id);
          return (<li key={account.id}>
            <a href={account.url} target="_blank" rel="noreferrer">
              <Img alt={`${account.name}'s icon`} width="32px" />
            </a>
          </li>)
        })}
      </InlineList>
  </div>
);

export default IndexPage;

export const query = graphql`
query IndexPage {
  site {
    siteMetadata {
      description
      accounts {
        id
        name
        url
      }
    }
  }
}
`
