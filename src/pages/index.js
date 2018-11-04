import React from 'react';
import styled from 'styled-components';
import theme from '../style/theme';
import socialIconImgFactory from '../components/socialicon';

const UnstyledLink = styled.a`
  color: ${theme.mainColor};
  text-decoration: none;
`

const IndexPage = ({ data }) => (
  <div>
      <p>❣️ Lover of the web</p>
      <p>🤓 Open source rookie</p>
      <p>🇬🇧 Always exploring the streets of London</p>
      <hr/>
      <ul>
        { data.site.siteMetadata.accounts.map(account => {
          const Img = socialIconImgFactory(account.id);
          return (<li key={account.id}>
            <UnstyledLink href={account.url} target="_blank">
              <Img alt={`${account.name}'s icon`} width="32px" />
            </UnstyledLink>
          </li>)
        })}
      </ul>
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